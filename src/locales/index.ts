const getTranslate = (lang: string) => {
  if (!!lang && lang.toLowerCase().includes('pt-br')) {
      return require('./pt-BR.json');
  }
  if (!!lang && lang.toLowerCase().includes('en')) {
      return require('./en.json');
  }
  if (!!lang && lang.toLowerCase().includes('es')) {
      return require('./es-PY.json');
  }
  
  return require('./pt-BR.json');
}

 export { getTranslate }