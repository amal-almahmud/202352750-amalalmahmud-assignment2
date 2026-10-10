# Technical Documentation

## Project Structure

- `index.html` contains the website content and sections
- `css/styles.css` contains the design and responsive layout
- `js/script.js` contains the contact form interaction and validation
- `assets/images/` contains the project placeholder images

## HTML

The website is a single HTML page with Home, About Me, Skills, Projects, and Contact sections

Semantic elements such as `header`, `nav`, `main`, `section`, `article`, and `footer` are used to organize the content

## CSS and Responsive Design

Flexbox is used for the navigation bar and skills list

CSS Grid is used to display the project cards

Media queries at `768px` and `480px` adjust the navigation, project cards, buttons, text sizes, and spacing for tablet and mobile screens

## JavaScript

JavaScript is used to validate the contact form

It checks for empty fields, rejects names containing numbers, checks the email format, and displays success or error feedback

The form is a demonstration only and does not send information to a server

## Testing

The website is tested in Microsoft Edge using responsive DevTools at desktop, tablet, and mobile sizes

Navigation links, project images, the contact form, responsive layout, and browser Console are checked during testing