# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer:

I ran into this on Friday so this is a great question and fresh in my mind! You can create an Add_foreign_key_to_students (You can name this however you like but be thoughtful and specific to what you name what is going to be migrated) migration in the Student table. The command to run this in the terminal is $ rails g migration Add_foreign_key_to_students. You then need to find the migration file to add the foreign key inside the empty method that was generated. Inside of that method you will need to write the following: add_column :student, :cohort_id, :integer Then back in the terminal run $ rails db:migrate and confirm that the migration was successful. You can then check your schema file to verify that the changes were added correctly. 
The foreign key would be called cohort_id and located in the Student model since it belongs to the Cohort model. 

Researched answer:
Forgetting to add columns to tables when creating them happens, sometimes a lot. To handle this, in rails we are able to generate a migration using the terminal command $ rails g migration <detailed_description_using_snake_case> column_name: datatype, then run $ rails db:migrate to add the file under that name. Next, open your text editor and update the model in that file to contain the following: add_column :student, :cohort_id, :integer. Be mindful that the add column change is permanent and can not just be rolled back if there is an issue. You are then ready to run $ rails db:migrate in the terminal. Once this is completed, open your schema file and verify that the changes have been added and are correct. If not, additional migrations will be needed to correct this.



2. Which RESTful routes must always be passed params? Why?

Your answer:

Researched answer:

3. Name three rails generator commands. What is created by each?

Your answer:

Researched answer:

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students

action: "POST" location: /students

action: "GET" location: /students/new

action: "GET" location: /students/2

action: "GET" location: /students/2/edit

action: "PATCH" location: /students/2

action: "DELETE" location: /students/2

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).
