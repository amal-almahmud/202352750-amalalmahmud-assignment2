# 202352750-amalalmahmud-assignment2

## Project Description

This project is a personal portfolio website for Amal Almahmud, a KFUPM student developing her programming and web development skills.

The website builds on Assignment 1 by adding interactive content, animations, improved contact form validation, and adjustments for smaller screens. It includes Home, About Me, Skills, Projects, and Contact sections.

The portfolio uses HTML, CSS, and vanilla JavaScript. It runs directly in the browser without package installation or a build step.

## Phase 2 Features

| Requirement | Implementation |
| --- | --- |
| Dynamic Content | An interactive Skills circle reveals and hides skill labels based on user interaction. |
| Data Handling | The contact form validates user input in the browser and displays a confirmation after valid input. |
| Animations and Transitions | Skills expand around the central circle, and the introduction includes a repeating typing effect. |
| Error Handling and User Feedback | The form displays individual field errors, a general message when all fields are empty, and a success message after valid input. |

### Interactive Skills Circle

The central Skills button reveals six skills: HTML, CSS, JavaScript, Java, Python, and UI/UX Design.

Users can open the circle by hovering over the central button or selecting it. Clicking or tapping the button toggles the circle.

For keyboard navigation, users can focus the button with Tab and press Enter or Space to toggle it. Escape closes the circle. It also closes when focus leaves the component, the mouse leaves the circle area, or the user selects an area outside it.

### Typing Effect

The introduction types “Software Engineer” one letter at a time, pauses, clears the entire phrase at once, and repeats.

### Responsive Layout Adjustments

On smaller screens, the introductory text and typing card are arranged in one column. The navigation links can wrap, both introductory buttons use the available width, and the card's badge is positioned inside its boundary.

### Project Cards

The Projects section presents:

- **Personal Portfolio Website:** the portfolio currently being developed.
- **Study Planner:** a planned application for organizing study sessions, assignments, and deadlines.

The project images are placeholders and will be replaced with actual project screenshots in a future update.

## Project Structure

| File or Folder | Purpose |
| --- | --- |
| `index.html` | Website content, navigation, sections, and contact form. |
| `css/styles.css` | Colors, typography, layouts, animations, and media queries. |
| `js/script.js` | Form validation, typing effect, and Skills circle interactions. |
| `assets/images/` | Project preview images. |
| `docs/technical-documentation.md` | Detailed technical documentation. |
| `docs/ai-usage-report.md` | Detailed AI usage report. |
| `README.md` | Project overview, setup instructions, and usage guide. |

## Setup Instructions

### Option 1: Download the Repository

1. Select **Code → Download ZIP** on the repository page.
2. Extract the downloaded ZIP file.
3. Open the extracted project folder.
4. Open `index.html` in a modern web browser.

Keep the HTML file and its accompanying folders together so the stylesheet, JavaScript, and images load correctly.

### Option 2: Clone with Git

If Git is installed, run:

```bash
git clone https://github.com/amal-almahmud/202352750-amalalmahmud-assignment2.git
cd 202352750-amalalmahmud-assignment2
```

Then open `index.html` in a browser.

### Optional: Visual Studio Code

Open the project folder in Visual Studio Code. If the Live Server extension is installed, right-click `index.html` and select **Open with Live Server**.

Live Server is optional. The website also runs by opening the HTML file directly.

## How to Use

1. Use the navigation links to move between sections.
2. Select **View My Projects** to move to the Projects section.
3. Hover over, click, or tap the **Skills** button to explore the skills.
4. Select **Contact Me** or use the navigation to reach the contact form.
5. Enter a name, email address, and message, then select **Send Message**.
6. Follow any validation messages and correct the affected fields.

## Contact Form Validation

| Field | Validation Rules |
| --- | --- |
| Name | Required. Must contain at least two letters. Supports letters from different languages, including Arabic, along with spaces, apostrophes, and hyphens. Numbers are not accepted. |
| Email | Required. Must pass the browser's basic email format validation. |
| Message | Required. Must contain text rather than only whitespace. |

### Feedback Behavior

- If all fields are empty, one general message asks the user to complete all fields.
- If individual fields are missing or invalid, messages appear below the affected fields.
- After an invalid submission, focus moves to the first invalid field.
- Editing a field with an error updates its feedback while preserving errors belonging to other fields.
- When all fields are valid, a thank-you message appears and the form is reset.

The contact form is a demonstration only. It does not send messages to a server or store submitted information.

## Testing

### Checks During Development

Contact form checks covered empty submissions, invalid names, invalid email formats, missing messages, and valid submissions. Field-specific error feedback was also checked during development.

After updating the responsive CSS, the navigation and Home section were visually checked in a narrow-screen browser preview. All navigation links, both introductory buttons, and the complete typing card were visible in the inspected preview.

### Manual Testing Guide

| Test | Expected Result |
| --- | --- |
| Hover over the Skills button, then leave the circle area. | Skills appear and then close. |
| Focus the Skills button with Tab and press Enter or Space. | Skills toggle between open and closed. |
| Press Escape while the Skills circle has keyboard focus. | Skills close. |
| Submit the form with all fields empty. | One general message asks the user to complete all fields. |
| Submit with some fields missing or invalid. | Individual errors appear below the affected fields. |
| Correct one invalid field. | Its feedback updates while other field errors remain. |
| Submit valid values in all fields. | A thank-you message appears and the form clears. |
| Observe the typing effect. | The phrase types, pauses, clears at once, and repeats. |


## AI Usage Summary

ChatGPT and Kilo Code supported the original Assignment 1 portfolio.

During Assignment 2, ChatGPT helped develop and refine the interactive Skills circle, typing effect, contact form validation, responsive CSS, and documentation.

For further details, see the [AI Usage Report](docs/ai-usage-report.md).

## Documentation

- [Technical Documentation](docs/technical-documentation.md)
- [AI Usage Report](docs/ai-usage-report.md)