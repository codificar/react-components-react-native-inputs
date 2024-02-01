const getTranslate = (lang: string) => {
  if (!!lang && lang.toLowerCase() === 'pt-br') {
      return require('./pt-BR.json');
  }
  if (!!lang && lang.toLowerCase() === 'en') {
      return require('./en.json');
  }
  if (!!lang && lang.toLowerCase() === 'es-py') {
      return require('./es-PY.json');
  }
  if (!!lang && lang.toLowerCase().includes('es')) {
    return require('./es-PY.json');
  }
  
  return require('./pt-BR.json');
}

 export { getTranslate }