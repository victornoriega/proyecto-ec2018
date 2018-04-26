module.exports = {

  // Lo malo de por ahora es que debemos tener una renderarización por cada página

  plantilla_para_proyectos : function(req, res, next){
    return res.render('proyectos/plantilla_proyectos', {title: "Distribuciones muestrales"});
  },

  plantilla_para_retos : function(req, res, next){
    return res.render('retos/plantilla_retos', {title: "CAT - project | Retos"});
  },

  plantilla_para_empresas : function (req, res, next){
    return res.render('instituciones-escuelas/plantilla_empresa', {title: "CAT - project | Empresas"})
  },

  plantilla_para_escuelas : function (req, res, next){
    return res.render('instituciones-escuelas/plantilla_escuela', {title: "CAT - project | Empresas"})
  },

  plantilla_lista_proyectos : function(req, res, next) {
    return res.render('proyectos/lista_proyectos', {title: "CAT - project | proyectos"});
  },

  plantilla_lista_escuelas : function(req, res, next) {
    return res.render('instituciones-escuelas/lista_escuelas', {title: "CAT - project | escuelas"});
  },

  plantilla_lista_empresas : function(req, res, next) {
    return res.render('instituciones-escuelas/lista_empresas', {title: "CAT - project | empresas"});
  },

  proyecto2 : function(req,res,next){
    return res.render('proyectos/proyecto_2', {title: "Números de seguridad en empresas"})
  },

  proyecto3 : function(req,res,next){
    return res.render('proyectos/proyecto_3', {title: "Gato81"})
  },

  proyecto4 : function(req,res,next){
    return res.render('proyectos/proyecto_4', {title: "CAT-Project"})
  },

  proyecto5 : function(req,res,next){
    return res.render('proyectos/proyecto_5', {title: "Introducción a Shiny de R con estadística"})
  },

  proyecto6 : function(req,res,next){
    return res.render('proyectos/proyecto_6', {title: "El doblaje"})
  },

}
