module.exports = function Entities (options) {
  options = options || {}

  return (module) => {
    module.alias('cerebral-module-entities')

    module.addState({
      ids: {}
    })

    options.name = module.name

    return options
  }
}
