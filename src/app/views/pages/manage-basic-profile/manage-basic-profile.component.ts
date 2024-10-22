import { Component, OnInit } from '@angular/core';
import { ManageBasicProfileService } from '../../../services/manage-basic-profile.service';

@Component({
  selector: 'app-manage-basic-profile',
  templateUrl: './manage-basic-profile.component.html',
  styleUrls: ['./manage-basic-profile.component.scss']
})
export class ManageBasicProfileComponent implements OnInit {

  categories: any[] = [];
  newCategory: { name: string; subcategories: string[] } = { name: '', subcategories: [] };
  selectedCategoryId: string | null = null;

  constructor(private manageBasicProfileService: ManageBasicProfileService) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.manageBasicProfileService.getAllCategories().subscribe(
      (response) => {
        this.categories = response;
      },
      (error) => {
        console.error('Error fetching categories', error);
      }
    );
  }


  createCategory(): void {
    this.manageBasicProfileService.createCategory(this.newCategory).subscribe(
      (response) => {
        console.log('Category created successfully', response);
        this.loadCategories(); 
        this.newCategory = { name: '', subcategories: [] }; 
      },
      (error) => {
        console.error('Error creating category', error);
      }
    );
  }


  updateCategory(): void {
    if (this.selectedCategoryId) {
      this.manageBasicProfileService.updateCategory(this.selectedCategoryId, this.newCategory).subscribe(
        (response) => {
          console.log('Category updated successfully', response);
          this.loadCategories(); 
          this.newCategory = { name: '', subcategories: [] }; 
          this.selectedCategoryId = null;
        },
        (error) => {
          console.error('Error updating category', error);
        }
      );
    }
  }


  deleteCategory(categoryId: string): void {
    this.manageBasicProfileService.deleteCategory(categoryId).subscribe(
      (response) => {
        console.log('Category deleted successfully', response);
        this.loadCategories(); 
      },
      (error) => {
        console.error('Error deleting category', error);
      }
    );
  }

  editCategory(category: any): void {
    this.selectedCategoryId = category._id;
    this.newCategory.name = category.name;
    this.newCategory.subcategories = category.subcategories.map((sub: any) => sub.name);
  }

  addSubcategory(subcategoryName: string): void {
    if (subcategoryName) {
      this.newCategory.subcategories.push(subcategoryName);
    }
  }


  removeSubcategory(subcategoryIndex: number): void {
    this.newCategory.subcategories.splice(subcategoryIndex, 1);
  }
}
