# ProseMirror 작동 방식
[사용자 입력] -> [ProseMirror 트랜잭션 생성] -> [트랜잭션 디스패치] -> [에디터 상태 업데이트] -> [에디터 뷰 업데이트]

- [트랜잭션 생성]에 plugin 로직이 개입할 수 있음 (예: history, transactionLogger)
- [트래잭션 디스패치]는 EditorView의 dispatchTransaction 메서드에서 처리
- [에디터 상태 업데이트]는 EditorState의 apply 메서드로 트랜잭션을 적용하여 새로운 상태 생성
- [에디터 뷰 업데이트]는 EditorView의 updateState 메서드로 새로운 상태를 반영
