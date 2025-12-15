/**
 * GET /
 * Homepage 
*/
exports.homepage = async (req, res) => {
  const locals = {
    title: "MindNotes",
    description: "MindNotes App.",
  }
  res.render('index', {
    locals,
    layout: '../views/layouts/front-page'
  });
}


/**
 * GET /
 * About 
*/
exports.about = async (req, res) => {
  const locals = {
    title: "About MindNotes",
    description: "MindNotes Notes App.",
  }
  res.render('about', locals);
}