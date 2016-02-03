this["JST"] = this["JST"] || {};

this["JST"]["templates/precompile/modals/GenericModal"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"modal\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content js-modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close js-modal-reject\">×</button>\n                <h4 class=\"modal-title\" id=\"myModalLabel\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h4>\n            </div>\n            <div class=\"modal-body\">\n                "
    + alias4(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"content","hash":{},"data":data}) : helper)))
    + "\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default js-modal-reject\">"
    + alias4(((helper = (helper = helpers.rejectBtn || (depth0 != null ? depth0.rejectBtn : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rejectBtn","hash":{},"data":data}) : helper)))
    + "</button>\n                <button type=\"button\" class=\"btn btn-primary js-modal-accept\">"
    + alias4(((helper = (helper = helpers.acceptBtn || (depth0 != null ? depth0.acceptBtn : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"acceptBtn","hash":{},"data":data}) : helper)))
    + "</button>\n            </div>\n        </div>\n    </div>\n</div>\n";
},"useData":true});