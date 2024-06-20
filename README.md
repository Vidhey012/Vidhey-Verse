# Vidhey Verse (Portfolio)

### Are you struggling to create a professional portfolio website? Look no further! You can use the Developer Portfolio template and create your very own personalized portfolio today! My website is designed to be user-friendly and easily customizable, making it perfect for both developers and freelancers.

---

## Table of Contents :scroll:

- [Sections](#sections-bookmark)
- [Installation](#installation-arrow_down)
- [Getting Started](#getting-started-dart)
- [Usage](#usage-joystick)
- [Packages Used](#packages-used-package)

---

# Sections :bookmark:

- HERO SECTION
- ABOUT ME
- EXPERIENCE
- SKILLS
- PROJECTS
- EDUCATION
- CERTIFICATIONS
- CONTACTS

---

# Installation :arrow_down:

### You will need to download Git and Node to run this project

- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/en/download/)

#### Make sure you have the latest version of both Git and Node on your computer.

```
node --version
git --version
```

## <br />

# Getting Started :dart:

### Fork and Clone the repo

To Fork the repo click on the fork button at the top right of the page. Once the repo is forked open your terminal and perform the following commands

```
git clone https://github.com/<YOUR GITHUB USERNAME>/Vidhey-Verse.git

cd Vidhey-Verse
```

### Install packages from the root directory

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

# Usage :joystick:

Goto [emailjs.com](https://www.emailjs.com/) and create a new account for the mail sending. In free trial you will get 200 mail per month. After setup `emailjs` account, Please create a new `.env` file from `.env.example` file.

Eg:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID =
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID =
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY =
NEXT_PUBLIC_GTM = # For site analytics
NEXT_PUBLIC_APP_URL = "http://localhost:3000"
NEXT_PUBLIC_RECAPTCHA_SECRET_KEY = # For captcha verification on contact form
NEXT_PUBLIC_RECAPTCHA_SITE_KEY =
```

### Then, Customize data in the `utils/data` [folder](https://github.com/Vidhey012/Vidhey-Verse/tree/main/utils/data).

Eg:

```javascript
export const personalData = {
  name: "VIDHEY BHOGADI",
  profile: '/profile.jpg',
  designation: "Full-Stack Developer",
  description: "My name is Vidhey Bhogadi...",
  email: 'vidhey.bhogadi2003@gmail.com',
  phone: '+917396104404',
  address: 'Near holy cross school, Gudivada, India - 521301 ',
  github: 'https://github.com/Vidhey012',
  facebook: 'https://www.facebook.com/bhogadividhey/',
  linkedIn: 'https://www.linkedin.com/in/bhogadi-vidhey-aa62b71a8/',
  twitter: 'https://x.com/name_is_vidhey',  
  instagram: 'https://www.instagram.com/b_vidhey/',
  resume: "https://github.com/Vidhey012/Resume/blob/main/Resume_new.pdf",
  devUsername: "vidhey012",
};
```

`devUsername` Used for fetching blog from `dev.to`.

---

# Packages Used :package:

| Used Package List  |
| :----------------: |
|        next        |
|  @emailjs/browser  |
|    lottie-react    |
| react-fast-marquee |
|    react-icons     |
|   react-toastify   |
|        sass        |
|    tailwindcss     |

---
