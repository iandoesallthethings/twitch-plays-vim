if [ "$1" = "node" ]; then
    ls *.ts | entr -r node index.ts
elif [ "$1" = "python" ]; then
    ls *.py | entr -r python main.py
else
    echo "Usage: $0 [node|python]"
fi