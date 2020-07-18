var selStRow;
var selEdRow;
var result = ''; 

// 行非選択状態の場合
if(IsTextSelected === 0 ) {
    selStRow = 0;
    selEdRow = GetLineCount(0);
    SelectAll(0);
} else {
    selStRow = GetSelectLineFrom; // 選択開始行取得
    selEdRow = GetSelectLineTo;   // 選択終了行取得
}

// 項目数を取得
var colCount = GetLineStr(selStRow).split(/\t/).length;

for (var i = selStRow; i <= selEdRow; i++) {
    // i行目を取得し、先頭・終了・タブをパイプラインで置き換える
    result +=  '| ' + GetLineStr(i).split(/\t/).join(' | ').replace( /\r?\n/g , ' |') + '\r\n';

    // 選択1行目の場合は、header行を追加する
    if (i === selStRow) {
        result += '|';
        for (var j = 1;  j <= colCount ; j++) {
            result += '--------|';
        }
        result += '\r\n';
    }
}
InsText(result);