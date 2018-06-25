function deleteAttributes(elem) {
    var deleteUrl = $(elem).attr('delete-url');

    swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then(function () {
        $.ajax({
            url: deleteUrl,
            type: 'post',
            dataType: 'json',
            error: function (xhr, status, error) {
                alert('There was an error with your request.' + xhr.responseText);
            }
        }).done(function (data) {
            swal(
                'Deleted!',
                'Has been deleted.',
                'success'
            );
            $.pjax.reload({container: '#grid-category-attributes'});
            $.pjax.reload({container: '#new_category_attribute'});
        });
    });
}
