import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/service/common/common.service';
import { Location } from '@angular/common';
import {
  FormControl,
  FormBuilder,
  Validators,
  FormGroup,
} from '@angular/forms';
import { QuestionService } from 'src/app/core/service/question/question.service';

@Component({
  selector: 'app-ask-fatwas',
  templateUrl: './ask-fatwas.component.html',
  styleUrls: ['./ask-fatwas.component.scss'],
})
export class AskFatwasComponent implements OnInit {
  categoryList: any;
  madhabList: any;
  languageList: any;
  form: any;
  isRtlLanguage = false;

  constructor(
    private commonServices: CommonService,
    private fb: FormBuilder,
    private userService: QuestionService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getMadhabList();
    this.getSubCategoryList();
    this.getlanguageList();

    this.form = this.fb.group({
      madhab: ['', Validators.required],
      subcategory: ['', Validators.required],
      language: ['', Validators.required],
      short_question: ['', Validators.required],
      question: ['', Validators.required],
    });

    this.form.get('language').valueChanges.subscribe((x: any) => {
      console.log('firstname value changed', x);
      if (x.title === 'Urdu' || x.title === 'Arabic') {
        this.isRtlLanguage = true;
      } else {
        this.isRtlLanguage = false;
      }
    });
  }

  getlanguageList() {
    this.commonServices.getLanguageList().subscribe((res) => {
      this.languageList = res;
      console.log('res lan', res);
    });
  }

  getMadhabList() {
    this.commonServices.getMadhabList().subscribe((res) => {
      this.madhabList = res;
    });
  }

  getSubCategoryList() {
    this.commonServices.getSubCategoryList().subscribe((res) => {
      console.log('res', res);
      this.categoryList = res;
    });
  }

  async handleSubmit() {
    console.log('Form Data', this.form);

    const { question, short_question, madhab, subcategory, language } =
      this.form.value;
    const lData = sessionStorage.getItem('userData');
    if (lData) {
      const userData = await JSON.parse(lData);

      let payload = {
        user_id: userData.id,
        madhab: madhab.id,
        category: subcategory.category_id,
        sub_category: subcategory.id,
        short_question,
        question,
        language: language.id,
        status: 1,
        mufti: null,
        mufti_answered: 0,
        verifier: null,
        reject_by: null,
        reject_reason: null,
      };

      this.userService.postQuestionItem(payload).subscribe((res) => {
        this.form.reset();
        this.location.back();
      });
    }
  }
}
