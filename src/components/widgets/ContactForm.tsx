import React, { useEffect } from 'react'
import SectionIntro from '~components/ui/SectionIntro.tsx'
import { IconParkSolidDoubleBed, IconParkSolidSingleBed } from '~/assets/icons/Icons.tsx'

export default function ContactForm() {
  useEffect(() => {
    // Create and append the external Mailchimp script
    const scriptExternal = document.createElement('script')
    scriptExternal.type = 'text/javascript'
    scriptExternal.async = true
    scriptExternal.src = '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'
    document.body.appendChild(scriptExternal)

    // Once the external script is loaded, insert the inline code
    // (For safety, you may want to wait until scriptExternal loads fully.)
    scriptExternal.onload = () => {
      const scriptInline = document.createElement('script')
      scriptInline.type = 'text/javascript'
      scriptInline.text = `
        (function($) {
          window.fnames = [];
          window.ftypes = [];
          fnames[0] = 'EMAIL'; ftypes[0] = 'email';
          fnames[1] = 'FNAME'; ftypes[1] = 'text';
          fnames[2] = 'LNAME'; ftypes[2] = 'text';
          fnames[3] = 'MMERGE3'; ftypes[3] = 'text';
          fnames[5] = 'MMERGE5'; ftypes[5] = 'text';
          fnames[7] = 'MMERGE7'; ftypes[7] = 'text';
          fnames[8] = 'MMERGE8'; ftypes[8] = 'text';
          fnames[10] = 'MMERGE10'; ftypes[10] = 'text';
          fnames[11] = 'MMERGE11'; ftypes[11] = 'text';
        })(jQuery);
        var $mcj = jQuery.noConflict(true);
      `
      document.body.appendChild(scriptInline)
    }

    // Cleanup function to remove the scripts if the component unmounts.
    return () => {
      if (scriptExternal.parentNode) {
        scriptExternal.parentNode.removeChild(scriptExternal)
      }
      // Optionally remove inline script if necessary.
      // (Store a reference to it if you plan to remove it.)
    }
  }, [])

  return (
    <div className="flex flex-col items-center justify-center p-custom">
      <SectionIntro title="JOIN SoCraTes 2025" description="Fill the form and subscribe to SoCraTes IT" />

      <div className="max-w-2xl w-full bg-light rounded-lg p-xl shadow-lg">
        <form
          action="https://socrates-conference.us20.list-manage.com/subscribe/post?u=4e24ba7602f7acf9fe79737d3&amp;id=be9dbd9e7a&amp;v_id=3927&amp;f_id=00d46ae4f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate space-y-6"
          target="_blank"
          noValidate>
          <div id="mc_embed_signup_scroll">
            <h2>Subscribe to SoCraTes IT 2024</h2>
            <p>Fill the form and subscribe to SoCraTes IT. You will receive an email with the hotel registration form.</p>
            <div className="indicates-required text-sm">
              <span className="asterisk">*</span> indicates required
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">
                Email Address <span className="asterisk">*</span>
              </label>
              <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required />
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-FNAME">First Name</label>
              <input type="text" name="FNAME" id="mce-FNAME" />
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-LNAME">Last Name</label>
              <input type="text" name="LNAME" id="mce-LNAME" />
            </div>

            <div id="mergeRow-gdpr" className="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group">
              <div className="content__gdpr">
                <label>Permissions</label>
                <p>
                  I wish to receive email communications from SoCraTes IT, including news about our conferences. We use Mailchimp as our marketing platform. By
                  clicking below to subscribe, you acknowledge that your information will be transferred to Mailchimp for processing.{' '}
                  <a href="https://mailchimp.com/legal/privacy/" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                    Learn more about Mailchimp's privacy practices here.
                  </a>
                </p>
              </div>
              <fieldset className="mc_fieldset gdprRequired mc-field-group" name="interestgroup_field">
                <label className="checkbox subfield" htmlFor="gdpr_11381">
                  <input type="checkbox" id="gdpr_11381" name="gdpr[11381]" value="Y" className="-checkbox gdpr" />
                  <span>Yes, I declare to have read and understood SoCraTes IT's Privacy Policy.</span>
                </label>
              </fieldset>
            </div>

            <div hidden>
              <input type="hidden" name="tags" value="3947491" />
            </div>
            <div id="mce-responses" className="clear foot">
              <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
              <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
            </div>
            {/* Hidden field to prevent bot signups */}
            <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
              <input type="text" name="b_4e24ba7602f7acf9fe79737d3_be9dbd9e7a" tabIndex={-1} value="" />
            </div>
            <div className="optionalParent">
              <div className="clear foot">
                <input
                  type="submit"
                  value="Register"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button highlighted"
                  style={{ backgroundColor: '#dc493a' }}
                />
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* Additional sections like "What is included" and "Rooms" would go here */}
    </div>
  )
}
