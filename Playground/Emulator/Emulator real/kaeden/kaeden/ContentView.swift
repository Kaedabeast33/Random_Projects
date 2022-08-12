//
//  ContentView.swift
//  kaeden
//
//  Created by Kaeden Bradshaw on 7/7/22.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack {
            Text("Hello, world!")
                .padding(.all, 4.0)
                .foregroundColor(.red)
                .background(color.black)
            Text("Kaeden Bradshaw")
                .padding()
            Button("Home") {
                    /*@START_MENU_TOKEN@*//*@PLACEHOLDER=Action@*/ /*@END_MENU_TOKEN@*/
                }
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        Group {
            NavigationView {
            ContentView()
                    .navigationTitle("Title Here")
            
            }
            .preferredColorScheme(.light
        )
        .previewDevice("iPad Pro (9.7-inch)")
            NavigationView {
                ContentView()
                    .navigationTitle("Title Here")
                
            }
            .preferredColorScheme(.light)
            .previewDevice("iPhone 13 Pro Max")
        }
}
}
