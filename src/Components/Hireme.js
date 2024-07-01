import React from 'react'
import useWindowScrollToTop from './useWindowScrollToTop'

const Hireme = () => {
  useWindowScrollToTop();
  return (
   <>
   <form>
  <h2>Hire Me</h2>
  <section>
    <h3>Project Details</h3>
    <label for="project-type">Project Type:</label>
    <select id="project-type" multiple>
      <option value="website-development">Website Development</option>
      <option value="mobile-app-development">Mobile App Development</option>
      <option value="ui-ux-design">UI/UX Design</option>
      <option value="consulting">Consulting</option>
      <option value="other">Other (please specify)</option>
    </select>
    <label for="project-description">Project Description:</label>
    <textarea id="project-description"></textarea>
    <label for="timeline">Timeline:</label>
    <input type="text" id="timeline" />
    <label for="budget">Budget:</label>
    <input type="number" id="budget" />
  </section>
  <section>
    <h3>Your Information</h3>
    <label for="name">Name:</label>
    <input type="text" id="name" />
    <label for="email">Email:</label>
    <input type="email" id="email" />
    <label for="phone">Phone:</label>
    <input type="tel" id="phone" />
    <label for="company">Company:</label>
    <input type="text" id="company" />
  </section>
  <section>
    <h3>Message</h3>
    <label for="how-did-you-hear-about-me">How did you hear about me?</label>
    <textarea id="how-did-you-hear-about-me"></textarea>
    <label for="additional-information">Any additional information?</label>
    <textarea id="additional-information"></textarea>
  </section>
  <button type="submit">Submit</button>
</form>
   </>
  )
}

export default Hireme