export function resolveDocList(docs,kind) {
    let resolvedDocs = []
    docs.map(doc=>{
        let data = {}
        data.id = doc.id
        if(doc.title.match(/\【(\S*)\】/)){
          data.kind = doc.title.match(/\【(\S*)\】/)[1]
          doc.title = doc.title.replace("【" + data.kind + "】","");
        } else {
          data.kind = null
        }
        if(doc.title.match(/\{(\S*)\}/)){
            data.en = doc.title.match(/\{(\S*)\}/)[1]
            doc.title = doc.title.replace("{" + data.en + "}","");
          } else {
            data.en = null
        }
        data.title = doc.title
        data.cover = doc.cover
        data.excerpt = doc.custom_description
        data.link = kind + '/' + doc.slug
        // 发布后的文章才会显示
        if (doc.status == 1) {
            resolvedDocs.push(data)
        }
      })
    return resolvedDocs
}