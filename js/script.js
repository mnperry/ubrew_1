$('.nav-item a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

  $(document).ready(function () {
    $('#myModal').modal('show');
    });
