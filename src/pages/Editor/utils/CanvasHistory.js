// import { atom, selector, useRecoilState } from 'recoil';
// import { fabric } from 'fabric';

// class CanvasHistory {
//   constructor() {
//     this.historyStack = [];
//     this.currentStateIndex = -1;
//     this.isRecording = true;
//   }

//   recordState(canvas) {
//     if (this.isRecording) {
//       const state = JSON.stringify(canvas.toDatalessJSON());
//       // 현재 상태와 다르면 기록
//       if (state !== this.historyStack[this.currentStateIndex]) {
//         this.historyStack = this.historyStack.slice(0, this.currentStateIndex + 1);
//         this.historyStack.push(state);
//         this.currentStateIndex += 1;
//         console.log(this.historyStack);
//       }
//     } 
//   }

//   recordAddImage(canvas) {
//     if (this.isRecording) {
//       const state = JSON.stringify(canvas.toDatalessJSON());
//       // 현재 상태와 다르면 기록
//       if (state !== this.historyStack[this.currentStateIndex]) {
//         this.historyStack = this.historyStack.slice(0, this.currentStateIndex + 1);
//         this.historyStack.push(state);
//         this.currentStateIndex += 1;
//         console.log(this.historyStack);
//       }
//     }
//   }

//   undo(canvas) {
//     if (this.currentStateIndex > 0) {
//       this.currentStateIndex -= 1;
//       this.loadState(canvas);
//       console.log('히스토리 스택:', this.historyStack);
//     } else {
//       this.currentStateIndex = -1;
//       console.log('히스토리 스택:', this.historyStack);
//     }
//   }
  
//   redo(canvas) {
//     if (this.currentStateIndex < this.historyStack.length - 1) {
//       this.isRecording = false;
//       this.currentStateIndex += 1;
//       this.loadState(canvas);
//       console.log('히스토리 스택:', this.historyStack);
//     } else {
//       this.isRecording = true;
//       console.log('히스토리 스택:', this.historyStack);
//     }
//   }

//   loadState(canvas) {
//     const state = JSON.parse(this.historyStack[this.currentStateIndex]);
//     canvas.loadFromJSON(state, () => {
//       canvas.renderAll();
//       console.log('히스토리 스택:', this.historyStack);
//     });
//   }

//   clearHistory() {
//     this.historyStack = [];
//     this.currentStateIndex = -1;
//   }

//   recordInitialState(canvas) {
//     if (canvas && this.isRecording) {
//       const state = JSON.stringify(canvas.toDatalessJSON());
//       // 현재 상태와 다르면 기록
//       if (state !== this.historyStack[this.currentStateIndex]) {
//         this.historyStack = this.historyStack.slice(0, this.currentStateIndex + 1);
//         this.historyStack.push(state);
//         this.currentStateIndex += 1;
//         console.log('히스토리 스택:', this.historyStack);
//       }
//     }
//   }

// }

// export default CanvasHistory;