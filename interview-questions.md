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
The RESTful routes that must have params passed through them are show, edit, update and delete. These all must have specific params passed through them because they are going to be interacting with specific data that already exists and is in the database. At a minimum an :id parameter would have to be passed to ensure that the corrected data and database instance is being viewed and modified.

Researched answer:
In my initial answer, I referenced the actions of the RESTful routes but did not include the HTTP verbs that are also associated with them. Though they do apply, in a sense it was incorrect or at least incomplete. Below is a quick reference table for the 7 RESTful routes.

***URL          	    HTTP Verb		Action***
**/photos/	            GET	            index**
**/photos/new	        GET	             new**
**/photos	            POST	             create**
**/photos/:id	        GET	             show**
**/photos/:id/edit	    GET	             edit**
**/photos/:id	        PATCH/PUT	update**
**/photos/:id	        DELETE	           destroy**

The actions index, show and create do actions do not need params to properly function since they are either all encompassing (index) or creating a new database instance. As seen above these are associated with the GET and POST HTTP verbs respectively. Show, edit, update and destroy, which associate with the GET, PATCH/PUT and DELETE HTTP verbs, must have params passed to interact with specific data that already exists within the database.

3. Name three rails generator commands. What is created by each?

Your answer: The first three rails generate commands the I think of when ask this are the following: 
$ rails g model: This command creates a model class that creates infrastructure to add data into the database. There is the ability to add attributes of column names and their respective data types that are then added to the schema file when a migration is run. 

$ rails g migration: This command allows you to add to and edit your schema file from the start of your project and throughout its development.

$ rails g controller: Running this command in the terminal creates a new controller file within the controller directory. This controller file is where the Model–view–controller (MVC) logic is contained, it basically gives the directions to the model and view. 

Researched answer:

$ rails g model: In addition to what I talked about above, running the $ rails g model command generates the model that represents a single table, that contains columns and records is the database. Using other commands these models that have been generated can be associated together in multiple different ways depending on how the project is being used and developed. They can then be added the the schema using the $ rails g migration command

$ rails g controller: In addition to the above, the CRUD methods and logic are defined within this file. 

$ rails g migration: The $ rails g migration command is how you can alter your database schema the same way every time. It is what pushes the changes to be made to the actual schema file. These changes are trackable in time stamped files in the DB/migrate folder. It will also allow you to use domain specific language instead of SQL scripts. 

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
Controller Method Name: index
Controller Method Action: The index method will GET and display all the instances that currently exist within the database.

def index 
    @students = Students.all 
end

action: "POST" location: /students
Controller Method Name: create
Controller Method Action: The create method will POST and create a new student instance in the database with the information that is entered. These will also require strong params to pass. 

def create 
    @student = Student.create(student_params) 
end

action: "GET" location: /students/new
Controller Method Name: new
Controller Method Action: The new method will GET a form that a user would input data to be added to a new instance in the database. 

def new 
    @student = Student.new    
end

action: "GET" location: /students/2
Controller Method Name: show
Controller Method Action: The show method will GET and show the database instance at the corresponding database id to the parameter that has been passed. The params of 2 were passed in this example.

def show 
    @student = Student.find(params[:id]) 
end

action: "GET" location: /students/2/edit
Controller Method Name: edit
Controller Method Action: The edit method will GET and display a form for editing a current database instance. It is similar to the new method and form but requires a id to the passed as a parameter with the id corresponding database instance. The params of 2 were passed in this example

def edit 
    @student = Student.find(params[:id]) 
end

action: "PATCH" location: /students/2
Controller Method Name: update
Controller Method Action: The update method will PATCH this instance in the database. PUT would be used if it was a total replacement but since the action says PATCH I am going to go with it is a partial data edit. This would update the specific database student instance that is passed as a param. The params of 2 were passed in this example. This will also require strong params to pass.

def update 
    @student = Student.find(params[:id]) 
    @student.update(student_params) 
end

action: "DELETE" location: /students/2
Controller Method Name: destroy
Controller Method Action: The destroy method will DELETE a specified database instance. This would delete the specific database student instance that is passed as a param. The params of 2 were passed in this example. 

def destroy 
    @student = Student.find(params[:id]) 
end

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).



Story 1: As a developer, I create a new application.
branch: main

- Has chosen front end language
- Has chosen backend end language
- Has chosen database
- Has chosen testing suite/framework
- Create a new application in chosen tech stack

Story 2: As a developer, I have a list of all the to do list actions. 
branch: backend-index

Has model for to-do list with to do item and item details columns and string data types.
- Has controller for to do list
- Has controller action for index
- Has route for index
- Has view for index
- Can see all to do list tasks on index page

Story 3: As a developer, I have the details of one item on to do list. 
branch: backend-show

- Has controller action for show
- Has route for show
- Has view for show
- Can navigate from the index to view of any single to do item

Story 4: As a developer, I have a form I can input data for a new to do item entry. 
branch: backend-new

- Has controller action for new
- Has route for new
- Has view for new
- Can navigate from the index page to the view of the new page
- Can see a form for to do item and item details data entry
- Can see a submit button
- Can see a button to return to index page

Story 5: As a developer, I create a new to do item entry. 
branch: backend-create

- Has controller action for create
- Has route for create
- Can click on a submit button and create a new database instance
- Can be rerouted back to index page to confirm valid to do item created

Story 6: As a developer, I have a form where I can add data to edit an existing to do list item. 
branch: backend-edit

- Has controller action for edit
- Has route for edit
- Has view for edit
- Can navigate from the show page of single to do list item to the view of the edit page
- Has a form for to do item and item details data entry
- Has a submit button
- Has a button to return to index page

Story 7: As a developer, I am able to update a current to do list item. 
branch: backend-update

- Has controller action for update
- Has route for update
- Can click on a submit button and update existing database instance
- Can be rerouted back to index page to confirm valid to do item update

Story 8: As a developer, I need to destroy a to do list item database instance. 
branch: backend-destroy

- Has controller action for destroy
- Has route for destroy
- Has button on the show page to destroy existing database instance
- Can perform the destroy action
- Can be rerouted to index page when to do item destroyed

Story 9: As a developer, I make sure only valid data is entered into the database 
branch: backend-validations

- validate all instances have presence of to do item and item details 
- validate all to do item and item detail instances have a minimum string length of 10
- validate all to do items are unique

Story 10: As a developer, I ensure that the completed backend code has been pushed properly to github 
branch: main

- Has pushed to github using proper github procedures
- Has PR pulled and approved
- Has verified all branches merged to main

