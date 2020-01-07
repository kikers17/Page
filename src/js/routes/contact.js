import React from "react"
import Hero from "./../components/hero"

const Contact = () => {
  return(
    <div id="contact">
      <Hero title="kikers17" subtitle="Contact"/>
      <div classNameName="hero is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-6 is-offset-3">
                <div class="title has-text-centered">Contact</div>
                <form className="box" action="https://formspree.io/xnqqgpya" method="POST">
                  <div class="field">
                    <label htmlFor="name" class="label">Name</label>
                      <div className="control">
                        <input className="input" type="text" id="name" name="name"></input>
                      </div>
                  </div>
                  <div className="field">
                    <label htmlFor="mail" className="label">E-mail</label>
                      <div className="control">
                        <input className="input" type="mail" id="mail" name="mail"></input>
                      </div>
                  </div>
                  <div className="field">
                    <label htmlFor="message" className="label">message</label>
                      <div className="control">
                        <textarea className="textarea" type="text" id="message" name="message"></textarea>
                      </div>
                  </div>
                  <div class="field is-grouped">
                    <div class="control">
                      <button type="submit" value="Send" class="button is-black">Send</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
