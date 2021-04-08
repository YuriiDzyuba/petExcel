import {ExcelComponent} from '@core/ExcelComponent';

export class Table extends ExcelComponent {
    static className () {
        return 'excel__table'
    }

    toHTML() {
        return (
           ` <div class="row">
            <div class="row-info">

            </div>
            <div class="row-data">
            <div class="column">
            A
            </div>
            <div class="column">
            B
            </div>
            <div class="column">
            C
            </div>
            </div>
            </div>
            <div class="row">
            <div class="row-info">
            1
            </div>
            <div class="row-data">
            <div class="cell " contenteditable="true">a1</div>
            <div class="cell" contenteditable="true" >b1</div>
            <div class="cell" contenteditable="true" >c1</div>
            <div class="cell " contenteditable="true">a1</div>
            <div class="cell" contenteditable="true" >b1</div>
            <div class="cell" contenteditable="true" >c1</div>
            <div class="cell " contenteditable="true">a1</div>
            <div class="cell" contenteditable="true" >b1</div>
            <div class="cell" contenteditable="true" >c1</div>
            <div class="cell selected" contenteditable="true">a1</div>
            <div class="cell" contenteditable="true" >b1</div>
            <div class="cell" contenteditable="true" >c1</div>
            <div class="cell " contenteditable="true">a1</div>
            <div class="cell" contenteditable="true" >b1</div>
            <div class="cell" contenteditable="true" >c1</div>
            </div>

            </div>
            <div class="row">
            <div class="row-info">
            2
            </div>
            <div class="row-data">
            <div class="cell selected" contenteditable="true">a2</div>
            <div class="cell" contenteditable="true" >b2</div>
            <div class="cell" contenteditable="true" >c2</div>
            </div>

            </div>
`
    )
    }
}