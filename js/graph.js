class Graph {
    bfstraversal(nodes, adjList) {
        let visit = new Array(nodes);
        let q = new Array();
        let bsf = new Array();
        q[0] = 0;
        visit[0] = true;
        while (q.length != 0) {
            let node = q[0];
            q.shift();
            bsf.push(node);

            if (adjList[node])
                for (let ad of adjList[node]) {
                    if (!visit[ad]) {
                        visit[ad] = true;
                        q.push(ad);
                    }
                }
        }
        return bsf;
    }

    dfsTraversal(nodes, adjList) {
        let visit = new Array(nodes);
        let storeDFS = new Array();
        for (let i = 0; i < nodes; i++) {
            if (!visit[i]) {
                this.dfs(i, visit, adjList, storeDFS);
            }
        }
        return storeDFS;
    }

    dfs(node, visit, adjList, storeDFS) {
        storeDFS.push(node);
        visit[node] = true;
        if (adjList[node])
            for (let ad of adjList[node]) {
                if (!visit[ad]) {
                    this.dfs(ad, visit, adjList, storeDFS);
                }
            }
    }

    detectCycleInUnDirectedGraph(nodes, adjList) {
        let visit = new Array(nodes);
        for (let i = 0; i < nodes; i++) {
            if (this.isCyceleInUndirectedGraph(i, -1, visit, adjList)) return true;
        }
        return false;
    }

    isCyceleInUndirectedGraph(node, parentNode, visit, adjList) {
        visit[node] = true;
        if (adjList[node]) {
            for (let ad of adjList[node]) {
                if (!visit[ad]) {
                    if (this.detectCycleInUnDirectedGraph(ad, node, visit, adjList))
                        return true;
                } else if (ad != parentNode) {
                    return true;
                }
            }
        }
        return false;
    }

    detectCycleInDirectedGraph(nodes, adjList) {
        let visit = new Array(nodes + 1);
        let dfsV = new Array(nodes + 1);
        for (let i = 1; i <= nodes; i++) {
            if (!visit[i]) {
                if (this.isCycleInDirectedGraph(i, visit, adjList, dfsV) == true)
                    return true;
            }
        }
        return false;
    }

    isCycleInDirectedGraph(node, visit, adjList, dfsV) {
        visit[node] = true;
        dfsV[node] = true;
        if (adjList[node])
            for (let ad of adjList[node]) {
                if (!visit[ad]) {
                    if (this.isCycleInDirectedGraph(ad, visit, adjList, dfsV)) {
                        return true;
                    }
                } else if (dfsV[ad]) {
                    console.log(ad);
                    return true;
                }
            }
        dfsV[node] = false;
        return false;
    }
}

const graph = new Graph();

let nodes = 9;
let adjList = [[1, 2], [], [3, 4], [5, 7], [], [6, 7], [], [8]];

console.log(graph.detectCycleInDirectedGraph(nodes, adjList));
