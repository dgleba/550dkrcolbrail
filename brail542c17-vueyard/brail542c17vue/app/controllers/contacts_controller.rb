class ContactsController < ApplicationController
# before_action :authenticate_user!

  #cancancan
   load_and_authorize_resource
  # before_action :set_contact, only: [:show, :edit, :update, :destroy]


  # cancancan..
  #load_and_authorize_resource :contact

  # GET /contacts
  def index
    @q = @contacts.search params[:q]
    @contacts = @q.result.page(params[:page])
  end

  # GET /contacts/1
  def show
  end

  # GET /contacts/new
  def new
  end

  # GET /contacts/1/edit
  def edit
  end

  # POST /contacts
  def create
    respond_to do |format|
      if @contact.save
        format.html { redirect_to @contact, notice: t('success_create') }
        format.json { render :show, status: :created, location: @contact }
      else
        format.html { render :new }
        format.json { render json: @contact.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /contacts/1
  def update
    respond_to do |format|
      if @contact.update(contact_params)
        format.html { redirect_to @contact, notice: t('success_update') }
        format.json { render :show, status: :ok, location: @contact }
      else
        format.html { render :edit }
        format.json { render json: @contact.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /contacts/1
  def destroy
    @contact.destroy
    respond_to do |format|
      format.html { redirect_to contacts_url, notice: t('success_destroy') }
      format.json { head :no_content }
    end
  end

  private

  # Only allow a trusted parameter "white list" through.
  def contact_params
    params.require(:contact).permit(:name, :bio)
  end
end
