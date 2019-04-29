export function resolveDocList(docs,kind,coverData) {
    let resolvedDocs = []
    docs.map(doc=>{
        // 发布后的文章才会显示
        if (doc.status == 1) {
          let data = {}
          data.id = doc.id
          if(doc.title.match(/\【(\S*)\】/)){
            data.kind = doc.title.match(/\【(\S*)\】/)[1]
            doc.title = doc.title.replace("【" + data.kind + "】","");
          } else {
            // 默认类型
            data.kind = null
          }
          if(doc.title.match(/\{(\S*)\}/)){
              data.en = doc.title.match(/\{(\S*)\}/)[1]
              doc.title = doc.title.replace("{" + data.en + "}","");
            } else {
              // 默认西文名
              data.en = null
          }
          data.title = doc.title
          data.cover = doc.cover
          const des = resolveData(doc.custom_description)
          if (des.cover){
            if (coverData[des.cover]) {
              data.cover = coverData[des.cover]
            } else {
              data.cover = 'no-img'
            }
          }
          data.excerpt = des.des
          data.link = kind + '/' + doc.slug
          resolvedDocs.push(data)
        }
      })
    return resolvedDocs
}

export function resolveCover(covers) {
  let resolvedCover = {}
  covers.map(data=>{
    let cover = {title:'', src:''}
    // 获取文件名
    cover.title = data.match(/name\=.+\.[a-z]+/)[0].split('name=')[1]
    // 获取文件链接
    cover.src = data.match(/src\=\".+width\=[0-9]+/)[0].split('src="')[1]
    // 生成成对象模式
    let key = cover.title;
    let value = cover.src
    resolvedCover[key] = value;
  })
  return resolvedCover
}

function resolveData(des){
  let resolveData = {des: des}
  if(des.indexOf('des')>-1) {
    resolveData.des = des.match(/des:(\S*);/)[1]
  }
  if(des.indexOf('cover')>-1) {
    resolveData.cover = des.match(/cover:(\S*);/)[1]
  }
  // console.log(resolveData)
  return resolveData
}