var selStRow;
var selEdRow;
var result = ''; 

// �s��I����Ԃ̏ꍇ
if(IsTextSelected === 0 ) {
    selStRow = 0;
    selEdRow = GetLineCount(0);
    SelectAll(0);
} else {
    selStRow = GetSelectLineFrom; // �I���J�n�s�擾
    selEdRow = GetSelectLineTo;   // �I���I���s�擾
}

// ���ڐ����擾
var colCount = GetLineStr(selStRow).split(/\t/).length;

for (var i = selStRow; i <= selEdRow; i++) {
    // i�s�ڂ��擾���A�擪�E�I���E�^�u���p�C�v���C���Œu��������
    result +=  '| ' + GetLineStr(i).split(/\t/).join(' | ').replace( /\r?\n/g , ' |') + '\r\n';

    // �I��1�s�ڂ̏ꍇ�́Aheader�s��ǉ�����
    if (i === selStRow) {
        result += '|';
        for (var j = 1;  j <= colCount ; j++) {
            result += '--------|';
        }
        result += '\r\n';
    }
}
InsText(result);