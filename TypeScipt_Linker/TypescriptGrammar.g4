grammar TypescriptGrammar;

start       : (NSPC nnamespace) 
            | (CLS cclass) 
            | (INTRF iinterface) 
            | (ENM eenum) 
            | (MEMB member);
nnamespace   : ID (NSPC nnamespace)* (typobjekt |
                                    MEMB member)* ;

typobjekt   : (CLS cclass | INTRF iinterface | ENM eenum);

cclass       : ID (MEMB member)? ;
   
iinterface   : ID (MEMB member) ;
    
eenum       : ID ;

member      : method | property ;
    
property    : ID ;
    
method      : ID OPENPAR arguments? CLOSEPAR ;
    
arguments   : argument (ARGSEP argument)* ;
    
argument    : type ;
    
type        : primitive_type
            | class_type     
            | generic_type   
            | array_type     
            ;
        
array_type  : (primitive_type | class_type) OPENBR CLOSEBR ;

generic_type: ID LESS type MORETH ;   

primitive_type: | STRING
              | NUMBER 
              | BOOLEAN 
              | OBJECT 
              ;
              
class_type    : ID ;

 NSPC    :   '.';
    CLS     :   ':';
    INTRF   :   '!';
    MEMB    :   '::';
    ENM     :   '..';
    OPENPAR :   '(';
    CLOSEPAR:   ')';
    ARGSEP  :   ',';
    PLUS    :   '+';
    STRING  :   'string';
    NUMBER  :   'number';
    BOOLEAN :   'boolean';
    OBJECT  :   'Object';
    LESS    :   '<';
    MORETH  :   '>';
    OPENBR  :   '[';
    CLOSEBR :   ']';
    ID      :   [a-zA-Z_][a-zA-Z_0-9]* ;