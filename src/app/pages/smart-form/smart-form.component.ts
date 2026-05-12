import { Component, OnInit } from '@angular/core';
import { FormFlowService } from '../../services/form-flow.service';
import { Question } from '../../models/question.model';
import { CommonModule } from '@angular/common';
import { SmartFormService } from '../../services/smart-form.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-smart-form',
  templateUrl: './smart-form.component.html',
  styleUrls: ['./smart-form.component.css'],
  imports: [CommonModule, FormsModule],
  standalone: true,
})
export class SmartFormComponent implements OnInit {

  currentQuestion?: Question;

  answers: any = {};
  history: any;


  showContactForm = false;

  contactData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  };

  constructor(
    private formFlowService: FormFlowService,
    private smartFormService: SmartFormService,
  ) { }

  ngOnInit(): void {
    this.loadQuestion('country');
  }

  loadQuestion(id: string): void {
    console.log('Loading question:', id);
    this.currentQuestion = this.formFlowService.getQuestion(id);
    console.log('Question found:', this.currentQuestion);
  }

  answer(option: string): void {

    if (!this.currentQuestion) return;

    this.answers[this.currentQuestion.id] = option;

    const nextQuestionId = this.currentQuestion.next?.[option];

    if (!nextQuestionId) {
      this.saveForm();
      return;
    }

    const nextQuestion = this.formFlowService.getQuestion(nextQuestionId);

    if (!nextQuestion) return;

    this.currentQuestion = nextQuestion;

    if (nextQuestion.type === 'result') {
      this.saveForm();
    }
  }

  toggleContactForm(): void {
    this.showContactForm = !this.showContactForm;
  }

  submitContact(): void {
    console.log('ANSWERS:', this.answers);
    console.log('CONTACT:', this.contactData);

    const payload = {

      country: this.answers.country,

      answers: this.answers,

      contactData: this.contactData

    };

    console.log('PAYLOAD:', payload);

    this.smartFormService
      .saveAnswers(payload)
      .subscribe({

        next: (response) => {

          console.log('SUCCESS:', response);

          alert('Pedido enviado com sucesso!');

          this.showContactForm = false;

          this.restart();
        },

        error: (error) => {

          console.log('ERROR:', error);

          alert('Erro ao enviar formulário');
        }
      });
  }

  saveForm(): void {

    console.log('Saving form...', this.answers);

    this.smartFormService.saveAnswers(this.answers)
      .subscribe({
        next: (response) => {
          console.log('Saved successfully', response);
        },
        error: (error) => {
          console.error('Save error:', error);
        }
      });
  }

  restart(): void {
    this.answers = {};
    this.loadQuestion('country');
  }
}
