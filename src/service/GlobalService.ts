import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ToastController } from "@ionic/angular";
import { IGlobalService } from "src/interface/IGlobalService";
@Injectable({
    'providedIn': 'root'
})
export class GlobalService implements IGlobalService{
    constructor(
        private _toastController: ToastController,
        private _router: Router
    ) {}

    exibeMessage(message: string): void 
    {        
        this.saidaConteudo(message);
    }

    async saidaConteudo(conteudo: string)
    {
        const toast = await this._toastController.create({
          message: conteudo,
          position: 'bottom',
          duration: 3000
        });
        toast.present();
    }

    mudaPagina(urlPage: string) : void
    {
        this._router.navigate([`/${urlPage}`]);
    }

}