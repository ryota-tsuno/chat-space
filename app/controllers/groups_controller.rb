class GroupsController < ApplicationController

    def index
    end
    
    def new
    end

    def create
      @group = Group.new(group_params)
      if @group.save
        redirect_to root_path, notice: "グループを作成されました"
      else
        flash.now[:alert] = "グループ名を入力してください"
        render :new
      end
    end

    def edit
    end

    def update
    end

end
