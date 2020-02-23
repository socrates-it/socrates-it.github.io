(function ($) {
  window.fnames = new Array();
  window.ftypes = new Array();
  fnames[0] = 'EMAIL';
  ftypes[0] = 'email';
  fnames[1] = 'FNAME';
  ftypes[1] = 'text';
  fnames[2] = 'LNAME';
  ftypes[2] = 'text';
  fnames[4] = 'MMERGE4';
  ftypes[4] = 'radio';

  if (typeof InstallTrigger !== 'undefined') {
    $("#mc-embedded-subscribe").after(`<div>
      <label class='text text-danger'>
        Using Firefox you could experience registration issues due to enhanced tracking protection
      </label>
    </div>`);
  }
}(jQuery));
var $mcj = jQuery.noConflict(true);
