const {
  defineTemplateBodyVisitor,
  getAttributeValue,
  makeDocsURL
} = require("../utils");

module.exports = {
  meta: {
    docs: {
      url: makeDocsURL("iframe-has-title")
    }
  },
  create(context) {
    return defineTemplateBodyVisitor(context, {
      "VElement[name='iframe']"(node) {
        const title = getAttributeValue(node, "title");

        if (!["string", "object"].includes(typeof title)) {
          context.report({
            node,
            message: "<iframe> elements must have a unique title property."
          });
        }
      }
    });
  }
};
