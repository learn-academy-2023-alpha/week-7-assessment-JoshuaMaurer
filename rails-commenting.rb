# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
class BlogPostsController < ApplicationController
    # The BlogPostsController is inheriting from the ApplicationController as indicated by the '<'. It allows the functionality and behavior to be passed from parent to child. Inside the BlogPostsController is where the controller methods for the BlogPost model are stored. Every model will have it's own controller. The ApplicationController being the parent controller, will have overarching and higher level, common functionality.
  def index
    # ---2)
    @posts = BlogPost.all
    # Within the index method, which is associated with the READ in CRUD functionality and GET HTTP verb, this line uses the @posts variable to store all of the current BlogPost instances that are in the database.
  end

  # ---3)
#   The show controller method, which is also associated with the READ in CRUD functionality and GET HTTP verb, will list a single instance from the database instead of all of them like the index controller method would. It is doing this by requiring the specific parameter of :id which will be associated to a specific unique blog post within the database and using the.find method. This is then stored within the @post variable. 
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
#   The new controller method, which is still associated with the READ in CRUD functionality (though it is the pathway to the form that will contain the information and ability to initialize the create method) and still uses GET HTTP verb. It will take the user to a location where all the data that is to be entered into the database when the create method is going to be used, can be input.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    # Within the create controller method, which is associated with the CREATE in CRUD functionality and POST HTTP verb, is the controller method that would actually create the new instance of the above input data in the database. Here, the @post variable is specifically calling on the strong params of blog_post_params when creating the new blog post using BlogPost.create. The use of the strong params here ensures that the input data has too and only contains the specific data that is in the strong params method below. Which in this case is the Title and Content of the blog post. It will then check if the data that is to be created in the new database instance is valid. If it is valid and passes the strong params check, the user will then be redirected to the blog_post_path which is the new blog post.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6)
    # Within the edit controller method, which is associated with the UPDATE in CRUD functionality (This is one that is however in a bit of an inbetween with functionally working like a READ but associating to the UPDATE in CRUD) and GET HTTP verb, edit is extremely similar to the new controller method. It will take the user to a location where all the data that is to be edited or changed can be entered in a form that will then be put/patch into the database when the update method is used. Then, similar to the show controller method, since we are dealing with data that is already in a database instance, it will require the specific parameter of :id to associate a specific unique blog post within the database and use the.find method. This is then stored within the @post variable.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    # Within the update controller method, which is associated with the UPDATE in CRUD functionality and PATCH/PUT HTTP verb (PUT is replacing the entire instance and PATCH if it is just being modified), the @post variable is specifically calling on the strong params of blog_post_params when updating the new blog post using @post.update. The use of the strong 
params here is again ensuring that the input data only contains the specific data that is in the strong params method below. It will then check if the data that is to be created in the updated database instance is valid. If it is valid and passes the strong params check, the user will then be redirected to the blog_post_path which is the updated blog post.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)
      # Within the destroy controller method, which is associated with the DELETE in CRUD functionality and DELETE HTTP verb, this line will show the user a view on completion if the instance in the database is deleted. It will redirect the user to show all of the current blog posts post delete.
      redirect_to blog_posts_path
    end
  end

  # ---9)
  #   Private is a keyword that restricts the methods that are below it to ONLY be called within the specified controller class and not accessible, passed or inherited anywhere else. In this case it is specifically referring to the blog_post_params method. 
  private

  def blog_post_params
    # ---10)
    #  Inside of this strong params method, it is stating the request using the strong params will be permitted ONLY if it has a title as well and content attributes and that they are only permitted within the blogBlogPostsController since blog_post is required. 
    params.require(:blog_post).permit(:title, :content)
  end
end

