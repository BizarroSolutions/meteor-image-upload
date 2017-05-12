Template.displayImage.helpers({
  thumbnail: function () {
    var doc = Template.parentData(1);
    var store = doc.imageCollection + "-thumbnail";
    if(doc.size){
      store = doc.imageCollection + "-" + doc.size;
    }
    return this.url({store: store});
  }
});

Template.uploadingImage.onRendered(function uploadingImageOnRendered() {
    $('.ui.progress')
        .progress({
            total: 100,
            text: {
                active: 'Uploading... ',
                success: 'Uploaded'
            }
        })
    ;
});

Template.displayImage.events({
    "click [data-action=delete-image]": function () {
        this.collection.remove(this._id);
    }
});