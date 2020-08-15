export class Recipe {
    public recipe_name : string;
    public recipe_description : string;
    public recipe_imagePath : string;

    constructor(rname : string , description : string , imagePath : string) {
        this.recipe_name = rname;
        this.recipe_description = description;
        this.recipe_imagePath = imagePath;
     }

}