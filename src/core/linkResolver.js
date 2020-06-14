module.exports = (doc) => {
  // console.log(doc.type, doc.uid)
  switch (doc.type) {
    case 'project':
      return `/project/${doc.uid}`;
    // case 'velo':
    //   return `/velo/${doc.uid}`;
    // case 'categorie_velo':
    //   return `/categorie-velo/${doc.uid}`;
    // case 'article':
    //   return `/blog/${doc.uid}`;
    // case 'categorie_blog':
    //   return `/categorie-blog/${doc.uid}`;
    // case 'evenements':
    //   return 'evenements';
    // case 'home':
    //   return '/'
    default:
      return '/'
  }
}

