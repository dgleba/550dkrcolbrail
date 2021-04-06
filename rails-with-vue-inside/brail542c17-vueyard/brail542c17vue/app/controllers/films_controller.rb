class FilmsController < ApplicationController
before_action :authenticate_user!

  #cancancan
  load_and_authorize_resource
  # before_action :set_film, only: [:show, :edit, :update, :destroy]

  #cancancan
  load_and_authorize_resource

  #cancancan
  load_and_authorize_resource


  # cancancan..
  #load_and_authorize_resource :film

  # GET /films
  def index
    @q = @films.search params[:q]
    @films = @q.result.page(params[:page])
  end

  # GET /films/1
  def show
  end

  # GET /films/new
  def new
  end

  # GET /films/1/edit
  def edit
  end

  # POST /films
  def create
    respond_to do |format|
      if @film.save
        format.html { redirect_to @film, notice: t('success_create') }
        format.json { render :show, status: :created, location: @film }
      else
        format.html { render :new }
        format.json { render json: @film.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /films/1
  def update
    respond_to do |format|
      if @film.update(film_params)
        format.html { redirect_to @film, notice: t('success_update') }
        format.json { render :show, status: :ok, location: @film }
      else
        format.html { render :edit }
        format.json { render json: @film.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /films/1
  def destroy
    @film.destroy
    respond_to do |format|
      format.html { redirect_to films_url, notice: t('success_destroy') }
      format.json { head :no_content }
    end
  end

  private

  # Only allow a trusted parameter "white list" through.
  def film_params
    params.require(:film).permit(:title, :description)
  end
end
