public class Super {

   protected int x = 5;

    public Super() {
        x ++ ;
        System.out.print("-" + method(7,3));
    }
    public int method(int i){
        return x + i - 4;
    }
    public int method(int i, int i2){
        int v1 = method(i);
        int v2 = i - i2;
        return method(i) + i - i2;
    }
}

class Sub extends Super {

     int x = 3;

     public Sub() {

     }

    public int method(int i){
        int v3 = x * 2;
        int v4 = i + super.x;
        return v3 + v4;

    }


    public static void main(String[] args){
       Super s = new Sub();
        System.out.print("-" + s.x);
        //Super sup = new Super();

    }
}
