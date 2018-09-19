class BooksController < ApplicationController
  def index
    @books = Book.all
  end

  def new
     @book = Book.new
  end

  def create
    @book = Book.new(book_params)
    @book.save
    redirect_to action: 'index'
  end


  private
    def  book_params
      params.require(:book).permit(:title, :author, :publisher,:genre)
    end
end
