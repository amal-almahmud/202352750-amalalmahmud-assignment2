# Technical Documentation

## Project Structure

- `index.html` contains the website content and sections.
- `css/styles.css` contains the design, animations, and responsive layout.
- `js/script.js` contains form validation, the typing effect, and the Skills circle interaction.
- `assets/images/` contains the project placeholder images.
- `docs/` contains the technical documentation and AI usage report.
- `README.md` contains the project description, setup instructions, and usage guide.

## HTML

The website is a single HTML page with Home, About Me, Skills, Projects, and Contact sections.

Semantic elements such as `header`, `nav`, `main`, `section`, `article`, and `footer` organize the content.

The Skills section contains a central button and a list of six skills.

The contact form contains Name, Email, and Message fields. Each field has a label and an area for its error message.

The form uses `novalidate` so JavaScript can control how validation messages appear.

## CSS and Responsive Design

Flexbox is used for the navigation bar and introductory buttons.

CSS Grid is used for the Home layout and project cards.

CSS variables store shared colors, spacing, and other design values.

The Skills labels are positioned around the central button. CSS transitions animate their movement when the circle opens or closes.

Media queries at `768px` and `480px` adjust the layout, buttons, text sizes, and spacing.

On smaller screens, the Home section changes to one column, navigation links can wrap, and the project cards appear in one column.

The typing card also uses smaller spacing and a smaller shadow to fit the available width.

## JavaScript

### Contact Form Validation

JavaScript prevents the default form submission and checks the input values.

It checks for empty fields, requires at least two letters in the name, rejects numbers in names, and checks the email format.

Arabic and English letters are supported in the name field. The message must contain text rather than only spaces.

If all fields are empty, one general message appears. Otherwise, errors appear below the affected fields.

After an invalid submission, focus moves to the first invalid field. Editing a field with an error updates its feedback.

Valid input produces a thank-you message and clears the form.

The form is a demonstration only. It does not send information to a server or store submitted data.

### Typing Effect

JavaScript uses `setTimeout` to display “Software Engineer” one letter at a time.

After a pause, the complete phrase is cleared at once and the effect starts again.

### Skills Circle

JavaScript adds or removes the `is-open` class to show or hide the skills.

The circle supports mouse hover, clicking, tapping, and keyboard controls.

Enter or Space toggles the focused button. Escape closes the circle. Leaving the circle area with the mouse or selecting outside it also closes it.

The script updates `aria-expanded` and `aria-hidden` to match the open or closed state.

## Testing

The original Assignment 1 version was tested in Microsoft Edge using responsive DevTools. Navigation links, project images, the contact form, and browser Console were checked during development.

For Assignment 2, contact form checks covered empty fields, invalid names, invalid email formats, missing messages, and valid submissions. Individual field feedback was also checked.

After the responsive CSS changes, the Home section and navigation were visually checked in a small-screen browser preview. The navigation links, introductory buttons, and complete typing card were visible.

Further testing is still needed for the Skills interaction in the mobile preview, all sections at specific screen widths, and the updated website in another browser.