//we are using Dijkstra algorithm

#include<bits/stdc++.h>

using namespace std;


//can implement using priority queue

// void dijkstra(priority_queue<pair<int,int>,vector<pair<int,int>>,greater<pair<int,int>>> pq) {
    
//     int n,m,source = 1;
//     vector<int> distTo(n+1,INT_MAX);
//     distTo[source] = 0;

// } 
class Sol {
    public:

vector<int> dijkstra(vector<vector<int>> adj[],int start,int vertex) {
    //using a set for storing nodes as a pair

    set<pair<int,int>> s;

    vector<int> dist(vertex,1e9); //initially all the nodes are set to infinite

    s.insert({0,start});  //the source is initilized with 0

    dist[start] = 0;

    while(!s.empty()) {
        auto i = *(s.begin());
        int node = i.second; //get the node 
        int distance  = i.first; // get the node distance
        s.erase(i); //make sure you remove out of the set 

        //iteration of adj nodes

        for(auto i : adj[node]) {
            int adjnode = i[0]; 
            int edgeweight = i[1];
            //we have to add the initial node distance to the new adj node wt
            if(dis + edgeweight < dist[adjNode]) {

                if(dist[adjNode]!=1e9) {
                    //remove the old entry from set
                    s.erase({dist[adjNode],adjNode});
                }
                //update the distance 
                dist[adjNode] = dis + edgeweight;
                //insert the updated node distance into tghe set
                s.insert({dist[adjNode],adjNode});
                
            }

            return dist;
        }
    } 
}
};

int main() {
    int vertex = 2,edge = 3,start = 2;
    vector<vector<int>> adj[vertex]; 
    vector<vector<int>> edges;
    vector<int> ver1<1,2>, ver2<2,5>, ver3<3,8>, ver4<4,2>,ver5<5,9>;

    adj[0].push_back(ver1);
    adj[0].push_back(ver1);
    adj[1].push_back(ver3);
    adj[1].push_back(ver2);
    adj[2].push_back(ver5);
    adj[2].push_back(ver4);

    Sol l;
    vector<int> r = l.dijkstra(adj,start,vertex);

    //for printing

    for(auto i:vertex) {
        cout << r[i] << " ";
    }

    return 0;

}

