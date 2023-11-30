# **                                _ Client Side Code _              **
<p>(Notes : লাইভ লিঙ্ক Webside এ অবশ্যই Third Party Cookies Enable রাখতে হবে Third Party Cookies Block থাকলে jwt ঠিক মতো কাজ করছে না )</p>


# Live Project link : [Skill UP](https://skillup-66.netlify.app/)

## Required Info  :

1. **Assignment Category: assignment12_category_0007**
2. **Admin email: mdsakebul66@gmail.com**
3. **Admin password: 123!Az**
4. **Teacher email: teacher@gmail.com**
5. **Teacher password: teacher@gmail.com**
6. **Student email: student1@nasmis.com**
7. **Student password: student1@nasmis.com**






# SkillUp Website Features

1. **Responsive Design:**
   - The website is designed to be responsive, ensuring a seamless experience across various devices, including desktops, tablets, and mobile phones.

2. **Navbar:**
   - The navbar includes a logo, website name, Home, All Classes, Teach on [your website name], and Sign In (when not logged in) button.
   - When logged in, the user's profile picture appears on the navbar.
   - Clicking on the profile picture displays a dropdown with options like User name, Dashboard, and Logout.

3. **Homepage:**
   - Banner section with relevant images/carousel.
   - Partners or collaborators section with logos and brief descriptions.
   - Highlighted classes section based on popularity or recommendations.
   - Feedback section in the student dashboard displayed through a carousel.
   - Section showing total users, total classes, and total student enrollment.

4. **All Classes Page:**
   - Displays classes in card format with information such as title, teacher name, image, price, short description, total enrollment, and enroll button.

5. **Class Details Page:**
   - Private route accessible after clicking the Enroll button.
   - Shows detailed information about the class, including teacher, price, etc.
   - Includes a Pay button redirecting to the payment page.

6. **Teach on [your website name] Page:**
   - Private route allowing users to apply for a teaching position.
   - Form includes fields like Name, Images, Experience, Title, and Category.
   - Submit for review button saves data in the database and shows the request on the admin dashboard.

7. **Student Dashboard:**
   - Private route with routes to My Enroll Class and Profile.
   - My Enroll Class page displays enrolled classes in card format with details.
   - My Enroll Class Details page shows assignments for each class and allows users to submit assignments.

8. **Admin Dashboard:**
   - Private route with routes to Teacher Request, Users, All Classes, and Profile.
   - Teacher Request page displays requests with options to approve or reject.
   - Users page shows all users with options to make a user admin.
   - All Classes page displays all classes with options to approve, reject, and see progress.

9. **My Profile:**
   - Displays user information, including name, role, image, email, and phone.

10. **Teacher Dashboard:**
    - Private route with routes to Add Class, My Class, and Profile.
    - Add Class page allows teachers to create classes with various details.
    - My Class page displays classes added by the teacher with options to update, delete, and see details.

11. **Authentication:**
    - Login and Registration pages with relevant error messages.
    - Google Sign-in option on the login page.
    - Registration form includes fields like Name, Email, Password, and PhotoURL.

12. **Bonus Tasks (Some implemented):**
    - Tanstack query in data fetching functionality (GET method).
    - React Hook Form in form pages.
    - Toast notifications for CRUD operations.
    - JWT implemented on login for storing tokens.

13. **Optional Tasks (Two tasks implemented):**
    - My Order Page on the student dashboard.
    - Animation on the website using framer motion.

14. **Commit History:**
    - Commits have been made for each significant task, ensuring a clear and organized development process.

15. **Readme.md:**
    - A well-documented readme file is available in the client-side GitHub repository.
