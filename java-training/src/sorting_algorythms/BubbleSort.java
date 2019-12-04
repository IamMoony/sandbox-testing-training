package sorting_algorythms;

import com.sun.jdi.IntegerType;

import java.util.ArrayList;

public class BubbleSort {

    int testint1 = 2;
    Integer testint2 = new Integer(2);

    public int[] bubbleSort(int[] toBeSorted) {



            int temp;
            for(int i = 1; i < toBeSorted .length; i++) {
                for(int j=0; j<toBeSorted.length-i; j++) {
                    if(toBeSorted[j]>toBeSorted[j+1]) {
                        temp=toBeSorted[j];
                        toBeSorted[j]=toBeSorted[j+1];
                        toBeSorted[j+1]=temp;
                    }

                }
            }
            return toBeSorted;
        }

        public void bubbleSortString(String[] toBeSorted) {
        String temp;

        for(int i = 0; i < toBeSorted.length; i++) {
            for(int j = i + 1; j < toBeSorted.length; j++) {
                if(toBeSorted[j].compareTo(toBeSorted[i]) < 0) {
                    temp = toBeSorted[i];
                    toBeSorted[i] = toBeSorted[j];
                    toBeSorted[j] = temp;

                }
            }
            System.out.println(toBeSorted[i]);
        }
        }

    public void bubbleSortPersonObjects(ArrayList<Person> toBeSorted) {

        String temp;


        for(int i = 0; i < toBeSorted.size(); i++) {

            for(int j = i + 1; j < toBeSorted.size(); j++) {

                if(toBeSorted.get(j).getName().compareTo(toBeSorted.get(i).getName()) < 0) {
                    temp = toBeSorted.get(i).getName();
                    String getPerson = toBeSorted.get(i).getName();
                    String getPerson2 = toBeSorted.get(j).getName();
                    getPerson = getPerson2;
                    getPerson2 = temp;


                }
            }
            System.out.println(toBeSorted.get(i).getName());
        }
    }
            }



