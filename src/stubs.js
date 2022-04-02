const stubs = {}

stubs.cpp = `
    #include <iostream>
    using namespace std;
    int main(){
        cout << "hello world\\n";
        return 0;
    }
`

stubs.py = `print("hello,world")`

export default stubs