if [ "$1" = "node" ]; then
    ls *.js | entr -r node index.js
elif [ "$1" = "python" ]; then
    ls *.py | entr -r python main.py
else
    echo "Usage: $0 [node|python]"
fi