class Matrix{
    mat
    constructor(martix){
        this.mat = martix
    }

    get rowsNum(){
        return this.mat.length;
    }
    
    get colsNum(){
        return this.mat[0].length;
    }
    
    forEach(cb){
        for (let j = 0; j < this.colsNum; j++) {
            for (let i = 0; i < this.rowsNum; i++) {
                cb(this.mat[i][j],i,j);
            }
        }
    }

    transponse(){
        let mat = [];
        for (let j = 0; j < this.colsNum; j++) {
            mat[j] = [];
            for (let i = 0; i < this.rowsNum; i++) {
                mat[j].push(this.mat[i][j]);
            }
        }
        return mat;
    }
}

export {
    Matrix
}