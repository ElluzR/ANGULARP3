import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GitService } from '../services/git.service';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css']
})
export class GitComponent implements OnInit {

  constructor(private route: ActivatedRoute, private gitService: GitService) { }

  E: string;
  Maracaibo: any = [];

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.E = params['E'];

      this.gitService.getImagem(this.E).subscribe(Maracaibo => {
        console.log (Maracaibo);
        this.Maracaibo = Maracaibo;
      });
    });
  }

}
