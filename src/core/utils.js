export function fileNameByUrl(url){
    const decoded = decodeURIComponent(url)
    return decoded.substring(decoded.lastIndexOf('/') + 1)
}

// In src/prismic-configuration.js
export const linkResolver = (doc) => {
    // URL for a category type
    if (doc.type === 'project') {
      return `/project/${doc.uid}`
    }
    // URL for a product type
    // if (doc.type === 'product') {
    //   return `/product/${doc.uid}`
    // }
    // URL for a page type
    // if (doc.type === 'homepage') {
    //   return `/`
    // }
    // Backup for all other types
    return '/'
}

export const getYearByDate = (d) => {
  var dt = new Date(d);
  return dt.getFullYear()
}