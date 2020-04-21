const {
  defineTemplateBodyVisitor,
  getAttributeValue,
  makeDocsURL
} = require("../utils");

module.exports = {
  meta: {
    docs: {
      url: makeDocsURL("tabindex-no-positive")
    }
  },
  create(context) {
    return defineTemplateBodyVisitor(context, {
      VElement(node) {
        const tabIndex = getAttributeValue(node, "tabindex");

        if (tabIndex && +tabIndex > 0) {
          context.report({
            node,
            message: "Avoid positive integer values for tabindex."
          });
        }
      }
    });
  }
};
