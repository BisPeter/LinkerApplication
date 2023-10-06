grammar Csharpgrm;

namespace       : ID (NSPC namespace)* typobjekt ;

typobjekt       : (CLS class | INTRF interface | ENM enum)  ;
    
class           : ID (MEMB member)? (PLUS class?)* ;

interface       : ID (MEMB member)*;

enum            : ID ;

member          : method | standardmember ;

standardmember  : ID ;

method          : ID OPENPAR arguments? CLOSEPAR ;

arguments       : argument (ARGSEP argument)* ;

argument        : type ;

type            : primitive_type 
                | class_type     
                | generic_type   
                | array_type     
                ;
    
array_type      : (primitive_type | class_type) OPENBR CLOSEBR ;

generic_type    : ID LESS type MORETH ;   

primitive_type  : 'bool' | 'byte' | 'sbyte' | 'char' 
                | 'decimal' |'double' | 'float' | 'int' 
                | 'uint' | 'nint' |'nuint' |'long' | 'ulong' 
                | 'short' | 'ushort' | 'object';

class_type      : ID ;


    NSPC    :   '.';        CHAR    :   'char';
    CLS     :   ':';        STRING  :   'string';
    INTRF   :   '!';        INT     :   'int';
    MEMB    :   '::';       BOOL    :   'bool';
    OPENPAR :   '(';        OBJECT  :   'object';
    CLOSEPAR:   ')';        BYTE    :   'byte';
    ARGSEP  :   ',';        SBYTE   :   'sbyte';
    PLUS    :   '+';        DECIMAL :   'decimal';       
    LESS    :   '<';        DOUBLE  :   'double';
    MORETH  :   '>';        FLOAT   :   'float';
    OPENBR  :   '[';        UINT    :   'uint';
    CLOSEBR :   ']';        NINT    :   'nint';
    NUINT   :   'nuint';    LONG    :   'long';
    ULONG   :   'ulong';    SHORT   :   'short';
    USHORT  :   'ushort';   ENM     :   '..' ;
    ID      :    [a-zA-Z_][a-zA-Z_0-9]* ;