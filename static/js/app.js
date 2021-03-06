"use strict";
// Transcrypt'ed from Python, 2018-06-14 09:31:25
function app () {
    var __symbols__ = ['__py3.6__', '__esv5__'];
    var __all__ = {};
    var __world__ = __all__;
    var __nest__ = function (headObject, tailNames, value) {
        var current = headObject;
        if (tailNames != '') {
            var tailChain = tailNames.split ('.');
            var firstNewIndex = tailChain.length;
            for (var index = 0; index < tailChain.length; index++) {
                if (!current.hasOwnProperty (tailChain [index])) {
                    firstNewIndex = index;
                    break;
                }
                current = current [tailChain [index]];
            }
            for (var index = firstNewIndex; index < tailChain.length; index++) {
                current [tailChain [index]] = {};
                current = current [tailChain [index]];
            }
        }
        for (var attrib in value) {
            current [attrib] = value [attrib];
        }
    };
    __all__.__nest__ = __nest__;
    var __init__ = function (module) {
        if (!module.__inited__) {
            module.__all__.__init__ (module.__all__);
            module.__inited__ = true;
        }
        return module.__all__;
    };
    __all__.__init__ = __init__;
    var __get__ = function (self, func, quotedFuncName) {
        if (self) {
            if (self.hasOwnProperty ('__class__') || typeof self == 'string' || self instanceof String) {
                if (quotedFuncName) {
                    Object.defineProperty (self, quotedFuncName, {
                        value: function () {
                            var args = [] .slice.apply (arguments);
                            return func.apply (null, [self] .concat (args));
                        },
                        writable: true,
                        enumerable: true,
                        configurable: true
                    });
                }
                return function () {
                    var args = [] .slice.apply (arguments);
                    return func.apply (null, [self] .concat (args));
                };
            }
            else {
                return func;
            }
        }
        else {
            return func;
        }
    }
    __all__.__get__ = __get__;
    var __getcm__ = function (self, func, quotedFuncName) {
        if (self.hasOwnProperty ('__class__')) {
            return function () {
                var args = [] .slice.apply (arguments);
                return func.apply (null, [self.__class__] .concat (args));
            };
        }
        else {
            return function () {
                var args = [] .slice.apply (arguments);
                return func.apply (null, [self] .concat (args));
            };
        }
    }
    __all__.__getcm__ = __getcm__;
    var __getsm__ = function (self, func, quotedFuncName) {
        return func;
    }
    __all__.__getsm__ = __getsm__;
    var py_metatype = {
        __name__: 'type',
        __bases__: [],
        __new__: function (meta, name, bases, attribs) {
            var cls = function () {
                var args = [] .slice.apply (arguments);
                return cls.__new__ (args);
            };
            for (var index = bases.length - 1; index >= 0; index--) {
                var base = bases [index];
                for (var attrib in base) {
                    var descrip = Object.getOwnPropertyDescriptor (base, attrib);
                    Object.defineProperty (cls, attrib, descrip);
                }
            }
            cls.__metaclass__ = meta;
            cls.__name__ = name.startsWith ('py_') ? name.slice (3) : name;
            cls.__bases__ = bases;
            for (var attrib in attribs) {
                var descrip = Object.getOwnPropertyDescriptor (attribs, attrib);
                Object.defineProperty (cls, attrib, descrip);
            }
            return cls;
        }
    };
    py_metatype.__metaclass__ = py_metatype;
    __all__.py_metatype = py_metatype;
    var object = {
        __init__: function (self) {},
        __metaclass__: py_metatype,
        __name__: 'object',
        __bases__: [],
        __new__: function (args) {
            var instance = Object.create (this, {__class__: {value: this, enumerable: true}});
            this.__init__.apply (null, [instance] .concat (args));
            return instance;
        }
    };
    __all__.object = object;
    var __class__ = function (name, bases, attribs, meta) {
        if (meta === undefined) {
            meta = bases [0] .__metaclass__;
        }
        return meta.__new__ (meta, name, bases, attribs);
    }
    __all__.__class__ = __class__;
    var __pragma__ = function () {};
    __all__.__pragma__ = __pragma__;
	__nest__ (
		__all__,
		'org.transcrypt.__base__', {
			__all__: {
				__inited__: false,
				__init__: function (__all__) {
					var __name__ = 'org.transcrypt.__base__';
					var __Envir__ = __class__ ('__Envir__', [object], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self) {
							self.interpreter_name = 'python';
							self.transpiler_name = 'transcrypt';
							self.transpiler_version = '3.6.101';
							self.target_subdir = '__javascript__';
						});}
					});
					var __envir__ = __Envir__ ();
					__pragma__ ('<all>')
						__all__.__Envir__ = __Envir__;
						__all__.__envir__ = __envir__;
						__all__.__name__ = __name__;
					__pragma__ ('</all>')
				}
			}
		}
	);

	__nest__ (
		__all__,
		'org.transcrypt.__standard__', {
			__all__: {
				__inited__: false,
				__init__: function (__all__) {
					var __name__ = 'org.transcrypt.__standard__';
					var Exception = __class__ ('Exception', [object], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self) {
							var kwargs = dict ();
							if (arguments.length) {
								var __ilastarg0__ = arguments.length - 1;
								if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
									var __allkwargs0__ = arguments [__ilastarg0__--];
									for (var __attrib0__ in __allkwargs0__) {
										switch (__attrib0__) {
											case 'self': var self = __allkwargs0__ [__attrib0__]; break;
											default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
										}
									}
									delete kwargs.__kwargtrans__;
								}
								var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
							}
							else {
								var args = tuple ();
							}
							self.__args__ = args;
							try {
								self.stack = kwargs.error.stack;
							}
							catch (__except0__) {
								self.stack = 'No stack trace available';
							}
						});},
						get __repr__ () {return __get__ (this, function (self) {
							if (len (self.__args__)) {
								return '{}{}'.format (self.__class__.__name__, repr (tuple (self.__args__)));
							}
							else {
								return '{}()'.format (self.__class__.__name__);
							}
						});},
						get __str__ () {return __get__ (this, function (self) {
							if (len (self.__args__) > 1) {
								return str (tuple (self.__args__));
							}
							else if (len (self.__args__)) {
								return str (self.__args__ [0]);
							}
							else {
								return '';
							}
						});}
					});
					var IterableError = __class__ ('IterableError', [Exception], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, error) {
							Exception.__init__ (self, "Can't iterate over non-iterable", __kwargtrans__ ({error: error}));
						});}
					});
					var StopIteration = __class__ ('StopIteration', [Exception], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, error) {
							Exception.__init__ (self, 'Iterator exhausted', __kwargtrans__ ({error: error}));
						});}
					});
					var ValueError = __class__ ('ValueError', [Exception], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, message, error) {
							Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
						});}
					});
					var KeyError = __class__ ('KeyError', [Exception], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, message, error) {
							Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
						});}
					});
					var AssertionError = __class__ ('AssertionError', [Exception], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, message, error) {
							if (message) {
								Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
							}
							else {
								Exception.__init__ (self, __kwargtrans__ ({error: error}));
							}
						});}
					});
					var NotImplementedError = __class__ ('NotImplementedError', [Exception], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, message, error) {
							Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
						});}
					});
					var IndexError = __class__ ('IndexError', [Exception], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, message, error) {
							Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
						});}
					});
					var AttributeError = __class__ ('AttributeError', [Exception], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, message, error) {
							Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
						});}
					});
					var py_TypeError = __class__ ('py_TypeError', [Exception], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, message, error) {
							Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
						});}
					});
					var Warning = __class__ ('Warning', [Exception], {
						__module__: __name__,
					});
					var UserWarning = __class__ ('UserWarning', [Warning], {
						__module__: __name__,
					});
					var DeprecationWarning = __class__ ('DeprecationWarning', [Warning], {
						__module__: __name__,
					});
					var RuntimeWarning = __class__ ('RuntimeWarning', [Warning], {
						__module__: __name__,
					});
					var __sort__ = function (iterable, key, reverse) {
						if (typeof key == 'undefined' || (key != null && key .hasOwnProperty ("__kwargtrans__"))) {;
							var key = null;
						};
						if (typeof reverse == 'undefined' || (reverse != null && reverse .hasOwnProperty ("__kwargtrans__"))) {;
							var reverse = false;
						};
						if (arguments.length) {
							var __ilastarg0__ = arguments.length - 1;
							if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
								var __allkwargs0__ = arguments [__ilastarg0__--];
								for (var __attrib0__ in __allkwargs0__) {
									switch (__attrib0__) {
										case 'iterable': var iterable = __allkwargs0__ [__attrib0__]; break;
										case 'key': var key = __allkwargs0__ [__attrib0__]; break;
										case 'reverse': var reverse = __allkwargs0__ [__attrib0__]; break;
									}
								}
							}
						}
						else {
						}
						if (key) {
							iterable.sort ((function __lambda__ (a, b) {
								if (arguments.length) {
									var __ilastarg0__ = arguments.length - 1;
									if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
										var __allkwargs0__ = arguments [__ilastarg0__--];
										for (var __attrib0__ in __allkwargs0__) {
											switch (__attrib0__) {
												case 'a': var a = __allkwargs0__ [__attrib0__]; break;
												case 'b': var b = __allkwargs0__ [__attrib0__]; break;
											}
										}
									}
								}
								else {
								}
								return (key (a) > key (b) ? 1 : -(1));
							}));
						}
						else {
							iterable.sort ();
						}
						if (reverse) {
							iterable.reverse ();
						}
					};
					var sorted = function (iterable, key, reverse) {
						if (typeof key == 'undefined' || (key != null && key .hasOwnProperty ("__kwargtrans__"))) {;
							var key = null;
						};
						if (typeof reverse == 'undefined' || (reverse != null && reverse .hasOwnProperty ("__kwargtrans__"))) {;
							var reverse = false;
						};
						if (arguments.length) {
							var __ilastarg0__ = arguments.length - 1;
							if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
								var __allkwargs0__ = arguments [__ilastarg0__--];
								for (var __attrib0__ in __allkwargs0__) {
									switch (__attrib0__) {
										case 'iterable': var iterable = __allkwargs0__ [__attrib0__]; break;
										case 'key': var key = __allkwargs0__ [__attrib0__]; break;
										case 'reverse': var reverse = __allkwargs0__ [__attrib0__]; break;
									}
								}
							}
						}
						else {
						}
						if (py_typeof (iterable) == dict) {
							var result = copy (iterable.py_keys ());
						}
						else {
							var result = copy (iterable);
						}
						__sort__ (result, key, reverse);
						return result;
					};
					var map = function (func, iterable) {
						return (function () {
							var __accu0__ = [];
							var __iterable0__ = iterable;
							for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
								var item = __iterable0__ [__index0__];
								__accu0__.append (func (item));
							}
							return __accu0__;
						}) ();
					};
					var filter = function (func, iterable) {
						if (func == null) {
							var func = bool;
						}
						return (function () {
							var __accu0__ = [];
							var __iterable0__ = iterable;
							for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
								var item = __iterable0__ [__index0__];
								if (func (item)) {
									__accu0__.append (item);
								}
							}
							return __accu0__;
						}) ();
					};
					var __Terminal__ = __class__ ('__Terminal__', [object], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self) {
							self.buffer = '';
							try {
								self.element = document.getElementById ('__terminal__');
							}
							catch (__except0__) {
								self.element = null;
							}
							if (self.element) {
								self.element.style.overflowX = 'auto';
								self.element.style.boxSizing = 'border-box';
								self.element.style.padding = '5px';
								self.element.innerHTML = '_';
							}
						});},
						get print () {return __get__ (this, function (self) {
							var sep = ' ';
							var end = '\n';
							if (arguments.length) {
								var __ilastarg0__ = arguments.length - 1;
								if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
									var __allkwargs0__ = arguments [__ilastarg0__--];
									for (var __attrib0__ in __allkwargs0__) {
										switch (__attrib0__) {
											case 'self': var self = __allkwargs0__ [__attrib0__]; break;
											case 'sep': var sep = __allkwargs0__ [__attrib0__]; break;
											case 'end': var end = __allkwargs0__ [__attrib0__]; break;
										}
									}
								}
								var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
							}
							else {
								var args = tuple ();
							}
							self.buffer = '{}{}{}'.format (self.buffer, sep.join ((function () {
								var __accu0__ = [];
								var __iterable0__ = args;
								for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
									var arg = __iterable0__ [__index0__];
									__accu0__.append (str (arg));
								}
								return __accu0__;
							}) ()), end).__getslice__ (-(4096), null, 1);
							if (self.element) {
								self.element.innerHTML = self.buffer.py_replace ('\n', '<br>').py_replace (' ', '&nbsp');
								self.element.scrollTop = self.element.scrollHeight;
							}
							else {
								console.log (sep.join ((function () {
									var __accu0__ = [];
									var __iterable0__ = args;
									for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
										var arg = __iterable0__ [__index0__];
										__accu0__.append (str (arg));
									}
									return __accu0__;
								}) ()));
							}
						});},
						get input () {return __get__ (this, function (self, question) {
							if (arguments.length) {
								var __ilastarg0__ = arguments.length - 1;
								if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
									var __allkwargs0__ = arguments [__ilastarg0__--];
									for (var __attrib0__ in __allkwargs0__) {
										switch (__attrib0__) {
											case 'self': var self = __allkwargs0__ [__attrib0__]; break;
											case 'question': var question = __allkwargs0__ [__attrib0__]; break;
										}
									}
								}
							}
							else {
							}
							self.print ('{}'.format (question), __kwargtrans__ ({end: ''}));
							var answer = window.prompt ('\n'.join (self.buffer.py_split ('\n').__getslice__ (-(16), null, 1)));
							self.print (answer);
							return answer;
						});}
					});
					var __terminal__ = __Terminal__ ();
					__pragma__ ('<all>')
						__all__.AssertionError = AssertionError;
						__all__.AttributeError = AttributeError;
						__all__.DeprecationWarning = DeprecationWarning;
						__all__.Exception = Exception;
						__all__.IndexError = IndexError;
						__all__.IterableError = IterableError;
						__all__.KeyError = KeyError;
						__all__.NotImplementedError = NotImplementedError;
						__all__.RuntimeWarning = RuntimeWarning;
						__all__.StopIteration = StopIteration;
						__all__.py_TypeError = py_TypeError;
						__all__.UserWarning = UserWarning;
						__all__.ValueError = ValueError;
						__all__.Warning = Warning;
						__all__.__Terminal__ = __Terminal__;
						__all__.__name__ = __name__;
						__all__.__sort__ = __sort__;
						__all__.__terminal__ = __terminal__;
						__all__.filter = filter;
						__all__.map = map;
						__all__.sorted = sorted;
					__pragma__ ('</all>')
				}
			}
		}
	);

    var __call__ = function (/* <callee>, <this>, <params>* */) {
        var args = [] .slice.apply (arguments);
        if (typeof args [0] == 'object' && '__call__' in args [0]) {
            return args [0] .__call__ .apply (args [1], args.slice (2));
        }
        else {
            return args [0] .apply (args [1], args.slice (2));
        }
    };
    __all__.__call__ = __call__;
    __nest__ (__all__, '', __init__ (__all__.org.transcrypt.__base__));
    var __envir__ = __all__.__envir__;
    __nest__ (__all__, '', __init__ (__all__.org.transcrypt.__standard__));
    var Exception = __all__.Exception;
    var IterableError = __all__.IterableError;
    var StopIteration = __all__.StopIteration;
    var ValueError = __all__.ValueError;
    var KeyError = __all__.KeyError;
    var AssertionError = __all__.AssertionError;
    var NotImplementedError = __all__.NotImplementedError;
    var IndexError = __all__.IndexError;
    var AttributeError = __all__.AttributeError;
    var py_TypeError = __all__.py_TypeError;
    var Warning = __all__.Warning;
    var UserWarning = __all__.UserWarning;
    var DeprecationWarning = __all__.DeprecationWarning;
    var RuntimeWarning = __all__.RuntimeWarning;
    var __sort__ = __all__.__sort__;
    var sorted = __all__.sorted;
    var map = __all__.map;
    var filter = __all__.filter;
    __all__.print = __all__.__terminal__.print;
    __all__.input = __all__.__terminal__.input;
    var __terminal__ = __all__.__terminal__;
    var print = __all__.print;
    var input = __all__.input;
    __envir__.executor_name = __envir__.transpiler_name;
    var __main__ = {__file__: ''};
    __all__.main = __main__;
    var __except__ = null;
    __all__.__except__ = __except__;
    var __kwargtrans__ = function (anObject) {
        anObject.__kwargtrans__ = null;
        anObject.constructor = Object;
        return anObject;
    }
    __all__.__kwargtrans__ = __kwargtrans__;
    var __globals__ = function (anObject) {
        if (isinstance (anObject, dict)) {
            return anObject;
        }
        else {
            return dict (anObject)
        }
    }
    __all__.__globals__ = __globals__
    var __super__ = function (aClass, methodName) {
        for (var index = 0; index < aClass.__bases__.length; index++) {
            var base = aClass.__bases__ [index];
            if (methodName in base) {
               return base [methodName];
            }
        }
        throw new Exception ('Superclass method not found');
    }
    __all__.__super__ = __super__
    var property = function (getter, setter) {
        if (!setter) {
            setter = function () {};
        }
        return {get: function () {return getter (this)}, set: function (value) {setter (this, value)}, enumerable: true};
    }
    __all__.property = property;
    var __setProperty__ = function (anObject, name, descriptor) {
        if (!anObject.hasOwnProperty (name)) {
            Object.defineProperty (anObject, name, descriptor);
        }
    }
    __all__.__setProperty__ = __setProperty__
    function assert (condition, message) {
        if (!condition) {
            throw AssertionError (message, new Error ());
        }
    }
    __all__.assert = assert;
    var __merge__ = function (object0, object1) {
        var result = {};
        for (var attrib in object0) {
            result [attrib] = object0 [attrib];
        }
        for (var attrib in object1) {
            result [attrib] = object1 [attrib];
        }
        return result;
    };
    __all__.__merge__ = __merge__;
    var dir = function (obj) {
        var aList = [];
        for (var aKey in obj) {
            aList.push (aKey.startsWith ('py_') ? aKey.slice (3) : aKey);
        }
        aList.sort ();
        return aList;
    };
    __all__.dir = dir;
    var setattr = function (obj, name, value) {
        obj [name] = value;
    };
    __all__.setattr = setattr;
    var getattr = function (obj, name) {
        return name in obj ? obj [name] : obj ['py_' + name];
    };
    __all__.getattr = getattr;
    var hasattr = function (obj, name) {
        try {
            return name in obj || 'py_' + name in obj;
        }
        catch (exception) {
            return false;
        }
    };
    __all__.hasattr = hasattr;
    var delattr = function (obj, name) {
        if (name in obj) {
            delete obj [name];
        }
        else {
            delete obj ['py_' + name];
        }
    };
    __all__.delattr = (delattr);
    var __in__ = function (element, container) {
        if (container === undefined || container === null) {
            return false;
        }
        if (container.__contains__ instanceof Function) {
            return container.__contains__ (element);
        }
        else {
            return (
                container.indexOf ?
                container.indexOf (element) > -1 :
                container.hasOwnProperty (element)
            );
        }
    };
    __all__.__in__ = __in__;
    var __specialattrib__ = function (attrib) {
        return (attrib.startswith ('__') && attrib.endswith ('__')) || attrib == 'constructor' || attrib.startswith ('py_');
    };
    __all__.__specialattrib__ = __specialattrib__;
    var len = function (anObject) {
        if (anObject === undefined || anObject === null) {
            return 0;
        }
        if (anObject.__len__ instanceof Function) {
            return anObject.__len__ ();
        }
        if (anObject.length !== undefined) {
            return anObject.length;
        }
        var length = 0;
        for (var attr in anObject) {
            if (!__specialattrib__ (attr)) {
                length++;
            }
        }
        return length;
    };
    __all__.len = len;
    function __i__ (any) {
        return py_typeof (any) == dict ? any.py_keys () : any;
    }
    function __k__ (keyed, key) {
        var result = keyed [key];
        if (typeof result == 'undefined') {
            if (keyed instanceof Array)
                if (key == +key && key >= 0 && keyed.length > key)
                    return result;
                else
                    throw IndexError (key, new Error());
            else
                throw KeyError (key, new Error());
        }
        return result;
    }
    function __t__ (target) {
        return (
            target === undefined || target === null ? false :
            ['boolean', 'number'] .indexOf (typeof target) >= 0 ? target :
            target.__bool__ instanceof Function ? (target.__bool__ () ? target : false) :
            target.__len__ instanceof Function ?  (target.__len__ () !== 0 ? target : false) :
            target instanceof Function ? target :
            len (target) !== 0 ? target :
            false
        );
    }
    __all__.__t__ = __t__;
    var float = function (any) {
        if (any == 'inf') {
            return Infinity;
        }
        else if (any == '-inf') {
            return -Infinity;
        }
        else if (any == 'nan') {
            return NaN;
        }
        else if (isNaN (parseFloat (any))) {
            if (any === false) {
                return 0;
            }
            else if (any === true) {
                return 1;
            }
            else {
                throw ValueError ("could not convert string to float: '" + str(any) + "'", new Error ());
            }
        }
        else {
            return +any;
        }
    };
    float.__name__ = 'float';
    float.__bases__ = [object];
    __all__.float = float;
    var int = function (any) {
        return float (any) | 0
    };
    int.__name__ = 'int';
    int.__bases__ = [object];
    __all__.int = int;
    var bool = function (any) {
        return !!__t__ (any);
    };
    bool.__name__ = 'bool';
    bool.__bases__ = [int];
    __all__.bool = bool;
    var py_typeof = function (anObject) {
        var aType = typeof anObject;
        if (aType == 'object') {
            try {
                return '__class__' in anObject ? anObject.__class__ : object;
            }
            catch (exception) {
                return aType;
            }
        }
        else {
            return (
                aType == 'boolean' ? bool :
                aType == 'string' ? str :
                aType == 'number' ? (anObject % 1 == 0 ? int : float) :
                null
            );
        }
    };
    __all__.py_typeof = py_typeof;
    var issubclass = function (aClass, classinfo) {
        if (classinfo instanceof Array) {
            for (var index = 0; index < classinfo.length; index++) {
                var aClass2 = classinfo [index];
                if (issubclass (aClass, aClass2)) {
                    return true;
                }
            }
            return false;
        }
        try {
            var aClass2 = aClass;
            if (aClass2 == classinfo) {
                return true;
            }
            else {
                var bases = [].slice.call (aClass2.__bases__);
                while (bases.length) {
                    aClass2 = bases.shift ();
                    if (aClass2 == classinfo) {
                        return true;
                    }
                    if (aClass2.__bases__.length) {
                        bases = [].slice.call (aClass2.__bases__).concat (bases);
                    }
                }
                return false;
            }
        }
        catch (exception) {
            return aClass == classinfo || classinfo == object;
        }
    };
    __all__.issubclass = issubclass;
    var isinstance = function (anObject, classinfo) {
        try {
            return '__class__' in anObject ? issubclass (anObject.__class__, classinfo) : issubclass (py_typeof (anObject), classinfo);
        }
        catch (exception) {
            return issubclass (py_typeof (anObject), classinfo);
        }
    };
    __all__.isinstance = isinstance;
    var callable = function (anObject) {
        return anObject && typeof anObject == 'object' && '__call__' in anObject ? true : typeof anObject === 'function';
    };
    __all__.callable = callable;
    var repr = function (anObject) {
        try {
            return anObject.__repr__ ();
        }
        catch (exception) {
            try {
                return anObject.__str__ ();
            }
            catch (exception) {
                try {
                    if (anObject == null) {
                        return 'None';
                    }
                    else if (anObject.constructor == Object) {
                        var result = '{';
                        var comma = false;
                        for (var attrib in anObject) {
                            if (!__specialattrib__ (attrib)) {
                                if (attrib.isnumeric ()) {
                                    var attribRepr = attrib;
                                }
                                else {
                                    var attribRepr = '\'' + attrib + '\'';
                                }
                                if (comma) {
                                    result += ', ';
                                }
                                else {
                                    comma = true;
                                }
                                result += attribRepr + ': ' + repr (anObject [attrib]);
                            }
                        }
                        result += '}';
                        return result;
                    }
                    else {
                        return typeof anObject == 'boolean' ? anObject.toString () .capitalize () : anObject.toString ();
                    }
                }
                catch (exception) {
                    return '<object of type: ' + typeof anObject + '>';
                }
            }
        }
    };
    __all__.repr = repr;
    var chr = function (charCode) {
        return String.fromCharCode (charCode);
    };
    __all__.chr = chr;
    var ord = function (aChar) {
        return aChar.charCodeAt (0);
    };
    __all__.ord = ord;
    var max = function (nrOrSeq) {
        return arguments.length == 1 ? Math.max.apply (null, nrOrSeq) : Math.max.apply (null, arguments);
    };
    __all__.max = max;
    var min = function (nrOrSeq) {
        return arguments.length == 1 ? Math.min.apply (null, nrOrSeq) : Math.min.apply (null, arguments);
    };
    __all__.min = min;
    var abs = Math.abs;
    __all__.abs = abs;
    var round = function (number, ndigits) {
        if (ndigits) {
            var scale = Math.pow (10, ndigits);
            number *= scale;
        }
        var rounded = Math.round (number);
        if (rounded - number == 0.5 && rounded % 2) {
            rounded -= 1;
        }
        if (ndigits) {
            rounded /= scale;
        }
        return rounded;
    };
    __all__.round = round;
    function __jsUsePyNext__ () {
        try {
            var result = this.__next__ ();
            return {value: result, done: false};
        }
        catch (exception) {
            return {value: undefined, done: true};
        }
    }
    function __pyUseJsNext__ () {
        var result = this.next ();
        if (result.done) {
            throw StopIteration (new Error ());
        }
        else {
            return result.value;
        }
    }
    function py_iter (iterable) {
        if (typeof iterable == 'string' || '__iter__' in iterable) {
            var result = iterable.__iter__ ();
            result.next = __jsUsePyNext__;
        }
        else if ('selector' in iterable) {
            var result = list (iterable) .__iter__ ();
            result.next = __jsUsePyNext__;
        }
        else if ('next' in iterable) {
            var result = iterable
            if (! ('__next__' in result)) {
                result.__next__ = __pyUseJsNext__;
            }
        }
        else if (Symbol.iterator in iterable) {
            var result = iterable [Symbol.iterator] ();
            result.__next__ = __pyUseJsNext__;
        }
        else {
            throw IterableError (new Error ());
        }
        result [Symbol.iterator] = function () {return result;};
        return result;
    }
    function py_next (iterator) {
        try {
            var result = iterator.__next__ ();
        }
        catch (exception) {
            var result = iterator.next ();
            if (result.done) {
                throw StopIteration (new Error ());
            }
            else {
                return result.value;
            }
        }
        if (result == undefined) {
            throw StopIteration (new Error ());
        }
        else {
            return result;
        }
    }
    function __PyIterator__ (iterable) {
        this.iterable = iterable;
        this.index = 0;
    }
    __PyIterator__.prototype.__next__ = function () {
        if (this.index < this.iterable.length) {
            return this.iterable [this.index++];
        }
        else {
            throw StopIteration (new Error ());
        }
    };
    function __JsIterator__ (iterable) {
        this.iterable = iterable;
        this.index = 0;
    }
    __JsIterator__.prototype.next = function () {
        if (this.index < this.iterable.py_keys.length) {
            return {value: this.index++, done: false};
        }
        else {
            return {value: undefined, done: true};
        }
    };
    var py_reversed = function (iterable) {
        iterable = iterable.slice ();
        iterable.reverse ();
        return iterable;
    };
    __all__.py_reversed = py_reversed;
    var zip = function () {
        var args = [] .slice.call (arguments);
        for (var i = 0; i < args.length; i++) {
            if (typeof args [i] == 'string') {
                args [i] = args [i] .split ('');
            }
            else if (!Array.isArray (args [i])) {
                args [i] = Array.from (args [i]);
            }
        }
        var shortest = args.length == 0 ? [] : args.reduce (
            function (array0, array1) {
                return array0.length < array1.length ? array0 : array1;
            }
        );
        return shortest.map (
            function (current, index) {
                return args.map (
                    function (current) {
                        return current [index];
                    }
                );
            }
        );
    };
    __all__.zip = zip;
    function range (start, stop, step) {
        if (stop == undefined) {
            stop = start;
            start = 0;
        }
        if (step == undefined) {
            step = 1;
        }
        if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
            return [];
        }
        var result = [];
        for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
            result.push(i);
        }
        return result;
    };
    __all__.range = range;
    function any (iterable) {
        for (var index = 0; index < iterable.length; index++) {
            if (bool (iterable [index])) {
                return true;
            }
        }
        return false;
    }
    function all (iterable) {
        for (var index = 0; index < iterable.length; index++) {
            if (! bool (iterable [index])) {
                return false;
            }
        }
        return true;
    }
    function sum (iterable) {
        var result = 0;
        for (var index = 0; index < iterable.length; index++) {
            result += iterable [index];
        }
        return result;
    }
    __all__.any = any;
    __all__.all = all;
    __all__.sum = sum;
    function enumerate (iterable) {
        return zip (range (len (iterable)), iterable);
    }
    __all__.enumerate = enumerate;
    function copy (anObject) {
        if (anObject == null || typeof anObject == "object") {
            return anObject;
        }
        else {
            var result = {};
            for (var attrib in obj) {
                if (anObject.hasOwnProperty (attrib)) {
                    result [attrib] = anObject [attrib];
                }
            }
            return result;
        }
    }
    __all__.copy = copy;
    function deepcopy (anObject) {
        if (anObject == null || typeof anObject == "object") {
            return anObject;
        }
        else {
            var result = {};
            for (var attrib in obj) {
                if (anObject.hasOwnProperty (attrib)) {
                    result [attrib] = deepcopy (anObject [attrib]);
                }
            }
            return result;
        }
    }
    __all__.deepcopy = deepcopy;
    function list (iterable) {
        var instance = iterable ? [] .slice.apply (iterable) : [];
        return instance;
    }
    __all__.list = list;
    Array.prototype.__class__ = list;
    list.__name__ = 'list';
    list.__bases__ = [object];
    Array.prototype.__iter__ = function () {return new __PyIterator__ (this);};
    Array.prototype.__getslice__ = function (start, stop, step) {
        if (start < 0) {
            start = this.length + start;
        }
        if (stop == null) {
            stop = this.length;
        }
        else if (stop < 0) {
            stop = this.length + stop;
        }
        else if (stop > this.length) {
            stop = this.length;
        }
        var result = list ([]);
        for (var index = start; index < stop; index += step) {
            result.push (this [index]);
        }
        return result;
    };
    Array.prototype.__setslice__ = function (start, stop, step, source) {
        if (start < 0) {
            start = this.length + start;
        }
        if (stop == null) {
            stop = this.length;
        }
        else if (stop < 0) {
            stop = this.length + stop;
        }
        if (step == null) {
            Array.prototype.splice.apply (this, [start, stop - start] .concat (source));
        }
        else {
            var sourceIndex = 0;
            for (var targetIndex = start; targetIndex < stop; targetIndex += step) {
                this [targetIndex] = source [sourceIndex++];
            }
        }
    };
    Array.prototype.__repr__ = function () {
        if (this.__class__ == set && !this.length) {
            return 'set()';
        }
        var result = !this.__class__ || this.__class__ == list ? '[' : this.__class__ == tuple ? '(' : '{';
        for (var index = 0; index < this.length; index++) {
            if (index) {
                result += ', ';
            }
            result += repr (this [index]);
        }
        if (this.__class__ == tuple && this.length == 1) {
            result += ',';
        }
        result += !this.__class__ || this.__class__ == list ? ']' : this.__class__ == tuple ? ')' : '}';;
        return result;
    };
    Array.prototype.__str__ = Array.prototype.__repr__;
    Array.prototype.append = function (element) {
        this.push (element);
    };
    Array.prototype.py_clear = function () {
        this.length = 0;
    };
    Array.prototype.extend = function (aList) {
        this.push.apply (this, aList);
    };
    Array.prototype.insert = function (index, element) {
        this.splice (index, 0, element);
    };
    Array.prototype.remove = function (element) {
        var index = this.indexOf (element);
        if (index == -1) {
            throw ValueError ("list.remove(x): x not in list", new Error ());
        }
        this.splice (index, 1);
    };
    Array.prototype.index = function (element) {
        return this.indexOf (element);
    };
    Array.prototype.py_pop = function (index) {
        if (index == undefined) {
            return this.pop ();
        }
        else {
            return this.splice (index, 1) [0];
        }
    };
    Array.prototype.py_sort = function () {
        __sort__.apply  (null, [this].concat ([] .slice.apply (arguments)));
    };
    Array.prototype.__add__ = function (aList) {
        return list (this.concat (aList));
    };
    Array.prototype.__mul__ = function (scalar) {
        var result = this;
        for (var i = 1; i < scalar; i++) {
            result = result.concat (this);
        }
        return result;
    };
    Array.prototype.__rmul__ = Array.prototype.__mul__;
    function tuple (iterable) {
        var instance = iterable ? [] .slice.apply (iterable) : [];
        instance.__class__ = tuple;
        return instance;
    }
    __all__.tuple = tuple;
    tuple.__name__ = 'tuple';
    tuple.__bases__ = [object];
    function set (iterable) {
        var instance = [];
        if (iterable) {
            for (var index = 0; index < iterable.length; index++) {
                instance.add (iterable [index]);
            }
        }
        instance.__class__ = set;
        return instance;
    }
    __all__.set = set;
    set.__name__ = 'set';
    set.__bases__ = [object];
    Array.prototype.__bindexOf__ = function (element) {
        element += '';
        var mindex = 0;
        var maxdex = this.length - 1;
        while (mindex <= maxdex) {
            var index = (mindex + maxdex) / 2 | 0;
            var middle = this [index] + '';
            if (middle < element) {
                mindex = index + 1;
            }
            else if (middle > element) {
                maxdex = index - 1;
            }
            else {
                return index;
            }
        }
        return -1;
    };
    Array.prototype.add = function (element) {
        if (this.indexOf (element) == -1) {
            this.push (element);
        }
    };
    Array.prototype.discard = function (element) {
        var index = this.indexOf (element);
        if (index != -1) {
            this.splice (index, 1);
        }
    };
    Array.prototype.isdisjoint = function (other) {
        this.sort ();
        for (var i = 0; i < other.length; i++) {
            if (this.__bindexOf__ (other [i]) != -1) {
                return false;
            }
        }
        return true;
    };
    Array.prototype.issuperset = function (other) {
        this.sort ();
        for (var i = 0; i < other.length; i++) {
            if (this.__bindexOf__ (other [i]) == -1) {
                return false;
            }
        }
        return true;
    };
    Array.prototype.issubset = function (other) {
        return set (other.slice ()) .issuperset (this);
    };
    Array.prototype.union = function (other) {
        var result = set (this.slice () .sort ());
        for (var i = 0; i < other.length; i++) {
            if (result.__bindexOf__ (other [i]) == -1) {
                result.push (other [i]);
            }
        }
        return result;
    };
    Array.prototype.intersection = function (other) {
        this.sort ();
        var result = set ();
        for (var i = 0; i < other.length; i++) {
            if (this.__bindexOf__ (other [i]) != -1) {
                result.push (other [i]);
            }
        }
        return result;
    };
    Array.prototype.difference = function (other) {
        var sother = set (other.slice () .sort ());
        var result = set ();
        for (var i = 0; i < this.length; i++) {
            if (sother.__bindexOf__ (this [i]) == -1) {
                result.push (this [i]);
            }
        }
        return result;
    };
    Array.prototype.symmetric_difference = function (other) {
        return this.union (other) .difference (this.intersection (other));
    };
    Array.prototype.py_update = function () {
        var updated = [] .concat.apply (this.slice (), arguments) .sort ();
        this.py_clear ();
        for (var i = 0; i < updated.length; i++) {
            if (updated [i] != updated [i - 1]) {
                this.push (updated [i]);
            }
        }
    };
    Array.prototype.__eq__ = function (other) {
        if (this.length != other.length) {
            return false;
        }
        if (this.__class__ == set) {
            this.sort ();
            other.sort ();
        }
        for (var i = 0; i < this.length; i++) {
            if (this [i] != other [i]) {
                return false;
            }
        }
        return true;
    };
    Array.prototype.__ne__ = function (other) {
        return !this.__eq__ (other);
    };
    Array.prototype.__le__ = function (other) {
        return this.issubset (other);
    };
    Array.prototype.__ge__ = function (other) {
        return this.issuperset (other);
    };
    Array.prototype.__lt__ = function (other) {
        return this.issubset (other) && !this.issuperset (other);
    };
    Array.prototype.__gt__ = function (other) {
        return this.issuperset (other) && !this.issubset (other);
    };
    function bytearray (bytable, encoding) {
        if (bytable == undefined) {
            return new Uint8Array (0);
        }
        else {
            var aType = py_typeof (bytable);
            if (aType == int) {
                return new Uint8Array (bytable);
            }
            else if (aType == str) {
                var aBytes = new Uint8Array (len (bytable));
                for (var i = 0; i < len (bytable); i++) {
                    aBytes [i] = bytable.charCodeAt (i);
                }
                return aBytes;
            }
            else if (aType == list || aType == tuple) {
                return new Uint8Array (bytable);
            }
            else {
                throw py_TypeError;
            }
        }
    }
    var bytes = bytearray;
    __all__.bytearray = bytearray;
    __all__.bytes = bytearray;
    Uint8Array.prototype.__add__ = function (aBytes) {
        var result = new Uint8Array (this.length + aBytes.length);
        result.set (this);
        result.set (aBytes, this.length);
        return result;
    };
    Uint8Array.prototype.__mul__ = function (scalar) {
        var result = new Uint8Array (scalar * this.length);
        for (var i = 0; i < scalar; i++) {
            result.set (this, i * this.length);
        }
        return result;
    };
    Uint8Array.prototype.__rmul__ = Uint8Array.prototype.__mul__;
    function str (stringable) {
        if (typeof stringable === 'number')
            return stringable.toString();
        else {
            try {
                return stringable.__str__ ();
            }
            catch (exception) {
                try {
                    return repr (stringable);
                }
                catch (exception) {
                    return String (stringable);
                }
            }
        }
    };
    __all__.str = str;
    String.prototype.__class__ = str;
    str.__name__ = 'str';
    str.__bases__ = [object];
    String.prototype.__iter__ = function () {new __PyIterator__ (this);};
    String.prototype.__repr__ = function () {
        return (this.indexOf ('\'') == -1 ? '\'' + this + '\'' : '"' + this + '"') .py_replace ('\t', '\\t') .py_replace ('\n', '\\n');
    };
    String.prototype.__str__ = function () {
        return this;
    };
    String.prototype.capitalize = function () {
        return this.charAt (0).toUpperCase () + this.slice (1);
    };
    String.prototype.endswith = function (suffix) {
        if (suffix instanceof Array) {
            for (var i=0;i<suffix.length;i++) {
                if (this.slice (-suffix[i].length) == suffix[i])
                    return true;
            }
        } else
            return suffix == '' || this.slice (-suffix.length) == suffix;
        return false;
    };
    String.prototype.find  = function (sub, start) {
        return this.indexOf (sub, start);
    };
    String.prototype.__getslice__ = function (start, stop, step) {
        if (start < 0) {
            start = this.length + start;
        }
        if (stop == null) {
            stop = this.length;
        }
        else if (stop < 0) {
            stop = this.length + stop;
        }
        var result = '';
        if (step == 1) {
            result = this.substring (start, stop);
        }
        else {
            for (var index = start; index < stop; index += step) {
                result = result.concat (this.charAt(index));
            }
        }
        return result;
    };
    __setProperty__ (String.prototype, 'format', {
        get: function () {return __get__ (this, function (self) {
            var args = tuple ([] .slice.apply (arguments).slice (1));
            var autoIndex = 0;
            return self.replace (/\{(\w*)\}/g, function (match, key) {
                if (key == '') {
                    key = autoIndex++;
                }
                if (key == +key) {
                    return args [key] == undefined ? match : str (args [key]);
                }
                else {
                    for (var index = 0; index < args.length; index++) {
                        if (typeof args [index] == 'object' && args [index][key] != undefined) {
                            return str (args [index][key]);
                        }
                    }
                    return match;
                }
            });
        });},
        enumerable: true
    });
    String.prototype.isalnum = function () {
        return /^[0-9a-zA-Z]{1,}$/.test(this)
    }
    String.prototype.isalpha = function () {
        return /^[a-zA-Z]{1,}$/.test(this)
    }
    String.prototype.isdecimal = function () {
        return /^[0-9]{1,}$/.test(this)
    }
    String.prototype.isdigit = function () {
        return this.isdecimal()
    }
    String.prototype.islower = function () {
        return /^[a-z]{1,}$/.test(this)
    }
    String.prototype.isupper = function () {
        return /^[A-Z]{1,}$/.test(this)
    }
    String.prototype.isspace = function () {
        return /^[\s]{1,}$/.test(this)
    }
    String.prototype.isnumeric = function () {
        return !isNaN (parseFloat (this)) && isFinite (this);
    };
    String.prototype.join = function (strings) {
        return strings.join (this);
    };
    String.prototype.lower = function () {
        return this.toLowerCase ();
    };
    String.prototype.py_replace = function (old, aNew, maxreplace) {
        return this.split (old, maxreplace) .join (aNew);
    };
    String.prototype.lstrip = function () {
        return this.replace (/^\s*/g, '');
    };
    String.prototype.rfind = function (sub, start) {
        return this.lastIndexOf (sub, start);
    };
    String.prototype.rsplit = function (sep, maxsplit) {
        if (sep == undefined || sep == null) {
            sep = /\s+/;
            var stripped = this.strip ();
        }
        else {
            var stripped = this;
        }
        if (maxsplit == undefined || maxsplit == -1) {
            return stripped.split (sep);
        }
        else {
            var result = stripped.split (sep);
            if (maxsplit < result.length) {
                var maxrsplit = result.length - maxsplit;
                return [result.slice (0, maxrsplit) .join (sep)] .concat (result.slice (maxrsplit));
            }
            else {
                return result;
            }
        }
    };
    String.prototype.rstrip = function () {
        return this.replace (/\s*$/g, '');
    };
    String.prototype.py_split = function (sep, maxsplit) {
        if (sep == undefined || sep == null) {
            sep = /\s+/;
            var stripped = this.strip ();
        }
        else {
            var stripped = this;
        }
        if (maxsplit == undefined || maxsplit == -1) {
            return stripped.split (sep);
        }
        else {
            var result = stripped.split (sep);
            if (maxsplit < result.length) {
                return result.slice (0, maxsplit).concat ([result.slice (maxsplit).join (sep)]);
            }
            else {
                return result;
            }
        }
    };
    String.prototype.startswith = function (prefix) {
        if (prefix instanceof Array) {
            for (var i=0;i<prefix.length;i++) {
                if (this.indexOf (prefix [i]) == 0)
                    return true;
            }
        } else
            return this.indexOf (prefix) == 0;
        return false;
    };
    String.prototype.strip = function () {
        return this.trim ();
    };
    String.prototype.upper = function () {
        return this.toUpperCase ();
    };
    String.prototype.__mul__ = function (scalar) {
        var result = '';
        for (var i = 0; i < scalar; i++) {
            result = result + this;
        }
        return result;
    };
    String.prototype.__rmul__ = String.prototype.__mul__;
    function __contains__ (element) {
        return this.hasOwnProperty (element);
    }
    function __keys__ () {
        var keys = [];
        for (var attrib in this) {
            if (!__specialattrib__ (attrib)) {
                keys.push (attrib);
            }
        }
        return keys;
    }
    function __items__ () {
        var items = [];
        for (var attrib in this) {
            if (!__specialattrib__ (attrib)) {
                items.push ([attrib, this [attrib]]);
            }
        }
        return items;
    }
    function __del__ (key) {
        delete this [key];
    }
    function __clear__ () {
        for (var attrib in this) {
            delete this [attrib];
        }
    }
    function __getdefault__ (aKey, aDefault) {
        var result = this [aKey];
        if (result == undefined) {
            result = this ['py_' + aKey]
        }
        return result == undefined ? (aDefault == undefined ? null : aDefault) : result;
    }
    function __setdefault__ (aKey, aDefault) {
        var result = this [aKey];
        if (result != undefined) {
            return result;
        }
        var val = aDefault == undefined ? null : aDefault;
        this [aKey] = val;
        return val;
    }
    function __pop__ (aKey, aDefault) {
        var result = this [aKey];
        if (result != undefined) {
            delete this [aKey];
            return result;
        } else {
            if ( aDefault === undefined ) {
                throw KeyError (aKey, new Error());
            }
        }
        return aDefault;
    }
    function __popitem__ () {
        var aKey = Object.keys (this) [0];
        if (aKey == null) {
            throw KeyError ("popitem(): dictionary is empty", new Error ());
        }
        var result = tuple ([aKey, this [aKey]]);
        delete this [aKey];
        return result;
    }
    function __update__ (aDict) {
        for (var aKey in aDict) {
            this [aKey] = aDict [aKey];
        }
    }
    function __values__ () {
        var values = [];
        for (var attrib in this) {
            if (!__specialattrib__ (attrib)) {
                values.push (this [attrib]);
            }
        }
        return values;
    }
    function __dgetitem__ (aKey) {
        return this [aKey];
    }
    function __dsetitem__ (aKey, aValue) {
        this [aKey] = aValue;
    }
    function dict (objectOrPairs) {
        var instance = {};
        if (!objectOrPairs || objectOrPairs instanceof Array) {
            if (objectOrPairs) {
                for (var index = 0; index < objectOrPairs.length; index++) {
                    var pair = objectOrPairs [index];
                    if ( !(pair instanceof Array) || pair.length != 2) {
                        throw ValueError(
                            "dict update sequence element #" + index +
                            " has length " + pair.length +
                            "; 2 is required", new Error());
                    }
                    var key = pair [0];
                    var val = pair [1];
                    if (!(objectOrPairs instanceof Array) && objectOrPairs instanceof Object) {
                         if (!isinstance (objectOrPairs, dict)) {
                             val = dict (val);
                         }
                    }
                    instance [key] = val;
                }
            }
        }
        else {
            if (isinstance (objectOrPairs, dict)) {
                var aKeys = objectOrPairs.py_keys ();
                for (var index = 0; index < aKeys.length; index++ ) {
                    var key = aKeys [index];
                    instance [key] = objectOrPairs [key];
                }
            } else if (objectOrPairs instanceof Object) {
                instance = objectOrPairs;
            } else {
                throw ValueError ("Invalid type of object for dict creation", new Error ());
            }
        }
        __setProperty__ (instance, '__class__', {value: dict, enumerable: false, writable: true});
        __setProperty__ (instance, '__contains__', {value: __contains__, enumerable: false});
        __setProperty__ (instance, 'py_keys', {value: __keys__, enumerable: false});
        __setProperty__ (instance, '__iter__', {value: function () {new __PyIterator__ (this.py_keys ());}, enumerable: false});
        __setProperty__ (instance, Symbol.iterator, {value: function () {new __JsIterator__ (this.py_keys ());}, enumerable: false});
        __setProperty__ (instance, 'py_items', {value: __items__, enumerable: false});
        __setProperty__ (instance, 'py_del', {value: __del__, enumerable: false});
        __setProperty__ (instance, 'py_clear', {value: __clear__, enumerable: false});
        __setProperty__ (instance, 'py_get', {value: __getdefault__, enumerable: false});
        __setProperty__ (instance, 'py_setdefault', {value: __setdefault__, enumerable: false});
        __setProperty__ (instance, 'py_pop', {value: __pop__, enumerable: false});
        __setProperty__ (instance, 'py_popitem', {value: __popitem__, enumerable: false});
        __setProperty__ (instance, 'py_update', {value: __update__, enumerable: false});
        __setProperty__ (instance, 'py_values', {value: __values__, enumerable: false});
        __setProperty__ (instance, '__getitem__', {value: __dgetitem__, enumerable: false});
        __setProperty__ (instance, '__setitem__', {value: __dsetitem__, enumerable: false});
        return instance;
    }
    __all__.dict = dict;
    dict.__name__ = 'dict';
    dict.__bases__ = [object];
    function __setdoc__ (docString) {
        this.__doc__ = docString;
        return this;
    }
    __setProperty__ (Function.prototype, '__setdoc__', {value: __setdoc__, enumerable: false});
    var __jsmod__ = function (a, b) {
        if (typeof a == 'object' && '__mod__' in a) {
            return a.__mod__ (b);
        }
        else if (typeof b == 'object' && '__rmod__' in b) {
            return b.__rmod__ (a);
        }
        else {
            return a % b;
        }
    };
    __all__.__jsmod__ = __jsmod__;
    var __mod__ = function (a, b) {
        if (typeof a == 'object' && '__mod__' in a) {
            return a.__mod__ (b);
        }
        else if (typeof b == 'object' && '__rmod__' in b) {
            return b.__rmod__ (a);
        }
        else {
            return ((a % b) + b) % b;
        }
    };
    __all__.mod = __mod__;
    var __pow__ = function (a, b) {
        if (typeof a == 'object' && '__pow__' in a) {
            return a.__pow__ (b);
        }
        else if (typeof b == 'object' && '__rpow__' in b) {
            return b.__rpow__ (a);
        }
        else {
            return Math.pow (a, b);
        }
    };
    __all__.pow = __pow__;
    var __neg__ = function (a) {
        if (typeof a == 'object' && '__neg__' in a) {
            return a.__neg__ ();
        }
        else {
            return -a;
        }
    };
    __all__.__neg__ = __neg__;
    var __matmul__ = function (a, b) {
        return a.__matmul__ (b);
    };
    __all__.__matmul__ = __matmul__;
    var __mul__ = function (a, b) {
        if (typeof a == 'object' && '__mul__' in a) {
            return a.__mul__ (b);
        }
        else if (typeof b == 'object' && '__rmul__' in b) {
            return b.__rmul__ (a);
        }
        else if (typeof a == 'string') {
            return a.__mul__ (b);
        }
        else if (typeof b == 'string') {
            return b.__rmul__ (a);
        }
        else {
            return a * b;
        }
    };
    __all__.__mul__ = __mul__;
    var __truediv__ = function (a, b) {
        if (typeof a == 'object' && '__truediv__' in a) {
            return a.__truediv__ (b);
        }
        else if (typeof b == 'object' && '__rtruediv__' in b) {
            return b.__rtruediv__ (a);
        }
        else if (typeof a == 'object' && '__div__' in a) {
            return a.__div__ (b);
        }
        else if (typeof b == 'object' && '__rdiv__' in b) {
            return b.__rdiv__ (a);
        }
        else {
            return a / b;
        }
    };
    __all__.__truediv__ = __truediv__;
    var __floordiv__ = function (a, b) {
        if (typeof a == 'object' && '__floordiv__' in a) {
            return a.__floordiv__ (b);
        }
        else if (typeof b == 'object' && '__rfloordiv__' in b) {
            return b.__rfloordiv__ (a);
        }
        else if (typeof a == 'object' && '__div__' in a) {
            return a.__div__ (b);
        }
        else if (typeof b == 'object' && '__rdiv__' in b) {
            return b.__rdiv__ (a);
        }
        else {
            return Math.floor (a / b);
        }
    };
    __all__.__floordiv__ = __floordiv__;
    var __add__ = function (a, b) {
        if (typeof a == 'object' && '__add__' in a) {
            return a.__add__ (b);
        }
        else if (typeof b == 'object' && '__radd__' in b) {
            return b.__radd__ (a);
        }
        else {
            return a + b;
        }
    };
    __all__.__add__ = __add__;
    var __sub__ = function (a, b) {
        if (typeof a == 'object' && '__sub__' in a) {
            return a.__sub__ (b);
        }
        else if (typeof b == 'object' && '__rsub__' in b) {
            return b.__rsub__ (a);
        }
        else {
            return a - b;
        }
    };
    __all__.__sub__ = __sub__;
    var __lshift__ = function (a, b) {
        if (typeof a == 'object' && '__lshift__' in a) {
            return a.__lshift__ (b);
        }
        else if (typeof b == 'object' && '__rlshift__' in b) {
            return b.__rlshift__ (a);
        }
        else {
            return a << b;
        }
    };
    __all__.__lshift__ = __lshift__;
    var __rshift__ = function (a, b) {
        if (typeof a == 'object' && '__rshift__' in a) {
            return a.__rshift__ (b);
        }
        else if (typeof b == 'object' && '__rrshift__' in b) {
            return b.__rrshift__ (a);
        }
        else {
            return a >> b;
        }
    };
    __all__.__rshift__ = __rshift__;
    var __or__ = function (a, b) {
        if (typeof a == 'object' && '__or__' in a) {
            return a.__or__ (b);
        }
        else if (typeof b == 'object' && '__ror__' in b) {
            return b.__ror__ (a);
        }
        else {
            return a | b;
        }
    };
    __all__.__or__ = __or__;
    var __xor__ = function (a, b) {
        if (typeof a == 'object' && '__xor__' in a) {
            return a.__xor__ (b);
        }
        else if (typeof b == 'object' && '__rxor__' in b) {
            return b.__rxor__ (a);
        }
        else {
            return a ^ b;
        }
    };
    __all__.__xor__ = __xor__;
    var __and__ = function (a, b) {
        if (typeof a == 'object' && '__and__' in a) {
            return a.__and__ (b);
        }
        else if (typeof b == 'object' && '__rand__' in b) {
            return b.__rand__ (a);
        }
        else {
            return a & b;
        }
    };
    __all__.__and__ = __and__;
    var __eq__ = function (a, b) {
        if (typeof a == 'object' && '__eq__' in a) {
            return a.__eq__ (b);
        }
        else {
            return a == b;
        }
    };
    __all__.__eq__ = __eq__;
    var __ne__ = function (a, b) {
        if (typeof a == 'object' && '__ne__' in a) {
            return a.__ne__ (b);
        }
        else {
            return a != b
        }
    };
    __all__.__ne__ = __ne__;
    var __lt__ = function (a, b) {
        if (typeof a == 'object' && '__lt__' in a) {
            return a.__lt__ (b);
        }
        else {
            return a < b;
        }
    };
    __all__.__lt__ = __lt__;
    var __le__ = function (a, b) {
        if (typeof a == 'object' && '__le__' in a) {
            return a.__le__ (b);
        }
        else {
            return a <= b;
        }
    };
    __all__.__le__ = __le__;
    var __gt__ = function (a, b) {
        if (typeof a == 'object' && '__gt__' in a) {
            return a.__gt__ (b);
        }
        else {
            return a > b;
        }
    };
    __all__.__gt__ = __gt__;
    var __ge__ = function (a, b) {
        if (typeof a == 'object' && '__ge__' in a) {
            return a.__ge__ (b);
        }
        else {
            return a >= b;
        }
    };
    __all__.__ge__ = __ge__;
    var __imatmul__ = function (a, b) {
        if ('__imatmul__' in a) {
            return a.__imatmul__ (b);
        }
        else {
            return a.__matmul__ (b);
        }
    };
    __all__.__imatmul__ = __imatmul__;
    var __ipow__ = function (a, b) {
        if (typeof a == 'object' && '__pow__' in a) {
            return a.__ipow__ (b);
        }
        else if (typeof a == 'object' && '__ipow__' in a) {
            return a.__pow__ (b);
        }
        else if (typeof b == 'object' && '__rpow__' in b) {
            return b.__rpow__ (a);
        }
        else {
            return Math.pow (a, b);
        }
    };
    __all__.ipow = __ipow__;
    var __ijsmod__ = function (a, b) {
        if (typeof a == 'object' && '__imod__' in a) {
            return a.__ismod__ (b);
        }
        else if (typeof a == 'object' && '__mod__' in a) {
            return a.__mod__ (b);
        }
        else if (typeof b == 'object' && '__rpow__' in b) {
            return b.__rmod__ (a);
        }
        else {
            return a % b;
        }
    };
    __all__.ijsmod__ = __ijsmod__;
    var __imod__ = function (a, b) {
        if (typeof a == 'object' && '__imod__' in a) {
            return a.__imod__ (b);
        }
        else if (typeof a == 'object' && '__mod__' in a) {
            return a.__mod__ (b);
        }
        else if (typeof b == 'object' && '__rmod__' in b) {
            return b.__rmod__ (a);
        }
        else {
            return ((a % b) + b) % b;
        }
    };
    __all__.imod = __imod__;
    var __imul__ = function (a, b) {
        if (typeof a == 'object' && '__imul__' in a) {
            return a.__imul__ (b);
        }
        else if (typeof a == 'object' && '__mul__' in a) {
            return a = a.__mul__ (b);
        }
        else if (typeof b == 'object' && '__rmul__' in b) {
            return a = b.__rmul__ (a);
        }
        else if (typeof a == 'string') {
            return a = a.__mul__ (b);
        }
        else if (typeof b == 'string') {
            return a = b.__rmul__ (a);
        }
        else {
            return a *= b;
        }
    };
    __all__.__imul__ = __imul__;
    var __idiv__ = function (a, b) {
        if (typeof a == 'object' && '__idiv__' in a) {
            return a.__idiv__ (b);
        }
        else if (typeof a == 'object' && '__div__' in a) {
            return a = a.__div__ (b);
        }
        else if (typeof b == 'object' && '__rdiv__' in b) {
            return a = b.__rdiv__ (a);
        }
        else {
            return a /= b;
        }
    };
    __all__.__idiv__ = __idiv__;
    var __iadd__ = function (a, b) {
        if (typeof a == 'object' && '__iadd__' in a) {
            return a.__iadd__ (b);
        }
        else if (typeof a == 'object' && '__add__' in a) {
            return a = a.__add__ (b);
        }
        else if (typeof b == 'object' && '__radd__' in b) {
            return a = b.__radd__ (a);
        }
        else {
            return a += b;
        }
    };
    __all__.__iadd__ = __iadd__;
    var __isub__ = function (a, b) {
        if (typeof a == 'object' && '__isub__' in a) {
            return a.__isub__ (b);
        }
        else if (typeof a == 'object' && '__sub__' in a) {
            return a = a.__sub__ (b);
        }
        else if (typeof b == 'object' && '__rsub__' in b) {
            return a = b.__rsub__ (a);
        }
        else {
            return a -= b;
        }
    };
    __all__.__isub__ = __isub__;
    var __ilshift__ = function (a, b) {
        if (typeof a == 'object' && '__ilshift__' in a) {
            return a.__ilshift__ (b);
        }
        else if (typeof a == 'object' && '__lshift__' in a) {
            return a = a.__lshift__ (b);
        }
        else if (typeof b == 'object' && '__rlshift__' in b) {
            return a = b.__rlshift__ (a);
        }
        else {
            return a <<= b;
        }
    };
    __all__.__ilshift__ = __ilshift__;
    var __irshift__ = function (a, b) {
        if (typeof a == 'object' && '__irshift__' in a) {
            return a.__irshift__ (b);
        }
        else if (typeof a == 'object' && '__rshift__' in a) {
            return a = a.__rshift__ (b);
        }
        else if (typeof b == 'object' && '__rrshift__' in b) {
            return a = b.__rrshift__ (a);
        }
        else {
            return a >>= b;
        }
    };
    __all__.__irshift__ = __irshift__;
    var __ior__ = function (a, b) {
        if (typeof a == 'object' && '__ior__' in a) {
            return a.__ior__ (b);
        }
        else if (typeof a == 'object' && '__or__' in a) {
            return a = a.__or__ (b);
        }
        else if (typeof b == 'object' && '__ror__' in b) {
            return a = b.__ror__ (a);
        }
        else {
            return a |= b;
        }
    };
    __all__.__ior__ = __ior__;
    var __ixor__ = function (a, b) {
        if (typeof a == 'object' && '__ixor__' in a) {
            return a.__ixor__ (b);
        }
        else if (typeof a == 'object' && '__xor__' in a) {
            return a = a.__xor__ (b);
        }
        else if (typeof b == 'object' && '__rxor__' in b) {
            return a = b.__rxor__ (a);
        }
        else {
            return a ^= b;
        }
    };
    __all__.__ixor__ = __ixor__;
    var __iand__ = function (a, b) {
        if (typeof a == 'object' && '__iand__' in a) {
            return a.__iand__ (b);
        }
        else if (typeof a == 'object' && '__and__' in a) {
            return a = a.__and__ (b);
        }
        else if (typeof b == 'object' && '__rand__' in b) {
            return a = b.__rand__ (a);
        }
        else {
            return a &= b;
        }
    };
    __all__.__iand__ = __iand__;
    var __getitem__ = function (container, key) {
        if (typeof container == 'object' && '__getitem__' in container) {
            return container.__getitem__ (key);
        }
        else if ((typeof container == 'string' || container instanceof Array) && key < 0) {
            return container [container.length + key];
        }
        else {
            return container [key];
        }
    };
    __all__.__getitem__ = __getitem__;
    var __setitem__ = function (container, key, value) {
        if (typeof container == 'object' && '__setitem__' in container) {
            container.__setitem__ (key, value);
        }
        else if ((typeof container == 'string' || container instanceof Array) && key < 0) {
            container [container.length + key] = value;
        }
        else {
            container [key] = value;
        }
    };
    __all__.__setitem__ = __setitem__;
    var __getslice__ = function (container, lower, upper, step) {
        if (typeof container == 'object' && '__getitem__' in container) {
            return container.__getitem__ ([lower, upper, step]);
        }
        else {
            return container.__getslice__ (lower, upper, step);
        }
    };
    __all__.__getslice__ = __getslice__;
    var __setslice__ = function (container, lower, upper, step, value) {
        if (typeof container == 'object' && '__setitem__' in container) {
            container.__setitem__ ([lower, upper, step], value);
        }
        else {
            container.__setslice__ (lower, upper, step, value);
        }
    };
    __all__.__setslice__ = __setslice__;
	(function () {
		var __name__ = '__main__';
		var getScrollBarWidth = function () {
			var outer = document.createElement ('div');
			outer.style.visibility = 'hidden';
			outer.style.width = '100px';
			outer.style.msOverflowStyle = 'scrollbar';
			document.body.appendChild (outer);
			var widthNoScroll = outer.offsetWidth;
			outer.style.overflow = 'scroll';
			var inner = document.createElement ('div');
			inner.style.width = '100%';
			outer.appendChild (inner);
			var widthWithScroll = inner.offsetWidth;
			outer.parentNode.removeChild (outer);
			return widthNoScroll - widthWithScroll;
		};
		var randint = function (range) {
			return int (Math.random () * range);
		};
		var randscalarvalue = function (baselen, pluslen) {
			var len = baselen + randint (pluslen);
			var buff = '';
			for (var i = 0; i < len; i++) {
				if (__mod__ (i, 2) == 1) {
					buff += list (['a', 'e', 'i', 'o', 'u']) [randint (5)];
				}
				else {
					buff += list (['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']) [randint (21)];
				}
			}
			return buff;
		};
		var uid = function () {
			var uid = randscalarvalue (8, 0);
			return uid;
		};
		var getfromobj = function (obj, key, py_default) {
			if (__in__ (key, obj)) {
				return obj [key];
			}
			return py_default;
		};
		var patchclasses = function (selfref, args) {
			var py_items = args.py_get ('patchclasses', list ([]));
			var __iterable0__ = py_items;
			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
				var item = __iterable0__ [__index0__];
				var parts = item.py_split ('/');
				var membername = parts [0];
				var action = parts [1];
				var classname = parts [2];
				if (action == 'a') {
					selfref [membername].ac (classname);
				}
				else if (action == 'r') {
					selfref [membername].rc (classname);
				}
			}
		};
		var putjsonbinfailed = function (err, json, callback) {
			print ('putjsonbin failed with', err);
			print ('falling back to local storage');
			localStorage.setItem ('jsonbin', json);
			callback (json, json);
		};
		var getlocalcontent = function () {
			print ('getting local content');
			var content = localStorage.getItem ('jsonbin');
			if (content == null) {
				print ('no local jsonbin, falling back to empty dict');
				var content = '{}';
			}
			return content;
		};
		var getjsonbinfailed = function (err, callback) {
			print ('getjsonbin failed with', err);
			callback (getlocalcontent ());
		};
		var putjsonbin = function (json, callback, id) {
			if (typeof id == 'undefined' || (id != null && id .hasOwnProperty ("__kwargtrans__"))) {;
				var id = null;
			};
			var method = 'POST';
			var url = 'https://api.jsonbin.io/b';
			if (id == 'local') {
				// pass;
			}
			else if (!(id === null)) {
				var url = (url + '/') + id;
				var method = 'PUT';
			}
			var args = {'method': method, 'headers': {'Content-Type': 'application/json', 'private': false}, 'body': json};
			fetch (url, args).then ((function __lambda__ (response) {
				return response.text ().then ((function __lambda__ (content) {
					return callback (json, content);
				}), (function __lambda__ (err) {
					return putjsonbinfailed (err, json, callback);
				}));
			}), (function __lambda__ (err) {
				return putjsonbinfailed (err, json, callback);
			}));
		};
		var getjsonbin = function (id, callback, errcallback, version) {
			if (typeof version == 'undefined' || (version != null && version .hasOwnProperty ("__kwargtrans__"))) {;
				var version = 'latest';
			};
			if (id == 'local') {
				callback (getlocalcontent ());
				return ;
			}
			var args = {'method': 'GET', 'headers': {'Content-Type': 'application/json', 'private': false}};
			fetch ((('https://api.jsonbin.io/b/' + id) + '/') + version, args).then ((function __lambda__ (response) {
				return response.text ().then ((function __lambda__ (content) {
					return callback (content);
				}), (function __lambda__ (err) {
					return errcalback (err);
				}));
			}), (function __lambda__ (err) {
				return errcallback (err);
			}));
		};
		var SCROLL_BAR_WIDTH = getScrollBarWidth ();
		var ce = function (tag) {
			return document.createElement (tag);
		};
		var ge = function (id) {
			return document.getElementById (id);
		};
		var addEventListener = function (object, kind, callback) {
			object.addEventListener (kind, callback, false);
		};
		var e = __class__ ('e', [object], {
			__module__: __name__,
			get __init__ () {return __get__ (this, function (self, tag) {
				self.e = ce (tag);
			});},
			get bc () {return __get__ (this, function (self, color) {
				self.e.style.backgroundColor = color;
				return self;
			});},
			get ms () {return __get__ (this, function (self) {
				self.e.style.fontFamily = 'monospace';
				return self;
			});},
			get a () {return __get__ (this, function (self, e) {
				self.e.appendChild (e.e);
				return self;
			});},
			get aa () {return __get__ (this, function (self, es) {
				var __iterable0__ = es;
				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
					var e = __iterable0__ [__index0__];
					self.a (e);
				}
				return self;
			});},
			get sa () {return __get__ (this, function (self, key, value) {
				self.e.setAttribute (key, value);
				return self;
			});},
			get ra () {return __get__ (this, function (self, key) {
				self.e.removeAttribute (key);
				return self;
			});},
			get ga () {return __get__ (this, function (self, key) {
				return self.e.getAttribute (key);
			});},
			get sv () {return __get__ (this, function (self, value) {
				self.e.value = value;
				return self;
			});},
			get html () {return __get__ (this, function (self, value) {
				self.e.innerHTML = value;
				return self;
			});},
			get x () {return __get__ (this, function (self) {
				while (self.e.firstChild) {
					self.e.removeChild (self.e.firstChild);
				}
				return self;
			});},
			get w () {return __get__ (this, function (self, w) {
				self.e.style.width = w + 'px';
				return self;
			});},
			get mw () {return __get__ (this, function (self, w) {
				self.e.style.minWidth = w + 'px';
				return self;
			});},
			get h () {return __get__ (this, function (self, h) {
				self.e.style.height = h + 'px';
				return self;
			});},
			get mh () {return __get__ (this, function (self, h) {
				self.e.style.minHeight = h + 'px';
				return self;
			});},
			get t () {return __get__ (this, function (self, t) {
				self.e.style.top = t + 'px';
				return self;
			});},
			get l () {return __get__ (this, function (self, l) {
				self.e.style.left = l + 'px';
				return self;
			});},
			get ml () {return __get__ (this, function (self, ml) {
				self.e.style.marginLeft = ml + 'px';
				return self;
			});},
			get mr () {return __get__ (this, function (self, mr) {
				self.e.style.marginRight = mr + 'px';
				return self;
			});},
			get mt () {return __get__ (this, function (self, mt) {
				self.e.style.marginTop = mt + 'px';
				return self;
			});},
			get mb () {return __get__ (this, function (self, mb) {
				self.e.style.marginBottom = mb + 'px';
				return self;
			});},
			get ac () {return __get__ (this, function (self, klass) {
				self.e.classList.add (klass);
				return self;
			});},
			get aac () {return __get__ (this, function (self, klasses) {
				var __iterable0__ = klasses;
				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
					var klass = __iterable0__ [__index0__];
					self.e.classList.add (klass);
				}
				return self;
			});},
			get rc () {return __get__ (this, function (self, klass) {
				self.e.classList.remove (klass);
				return self;
			});},
			get v () {return __get__ (this, function (self) {
				return self.e.value;
			});},
			get focusme () {return __get__ (this, function (self) {
				self.e.focus ();
				return self;
			});},
			get fl () {return __get__ (this, function (self) {
				setTimeout (self.focusme, 50);
				return self;
			});},
			get ae () {return __get__ (this, function (self, kind, callback) {
				self.e.addEventListener (kind, callback);
				return self;
			});},
			get disable () {return __get__ (this, function (self) {
				return self.sa ('disabled', true);
			});},
			get enable () {return __get__ (this, function (self) {
				return self.ra ('disabled');
			});},
			get able () {return __get__ (this, function (self, able) {
				if (able) {
					return self.enable ();
				}
				return self.disable ();
			});},
			get fs () {return __get__ (this, function (self, size) {
				self.e.style.fontSize = size + 'px';
				return self;
			});}
		});
		var Div = __class__ ('Div', [e], {
			__module__: __name__,
			get __init__ () {return __get__ (this, function (self) {
				__super__ (Div, '__init__') (self, 'div');
			});}
		});
		var Span = __class__ ('Span', [e], {
			__module__: __name__,
			get __init__ () {return __get__ (this, function (self) {
				__super__ (Span, '__init__') (self, 'span');
			});}
		});
		var Input = __class__ ('Input', [e], {
			__module__: __name__,
			get __init__ () {return __get__ (this, function (self, kind) {
				__super__ (Input, '__init__') (self, 'input');
				self.sa ('type', kind);
			});}
		});
		var Select = __class__ ('Select', [e], {
			__module__: __name__,
			get __init__ () {return __get__ (this, function (self) {
				__super__ (Select, '__init__') (self, 'select');
			});}
		});
		var Option = __class__ ('Option', [e], {
			__module__: __name__,
			get __init__ () {return __get__ (this, function (self, key, displayname, selected) {
				if (typeof selected == 'undefined' || (selected != null && selected .hasOwnProperty ("__kwargtrans__"))) {;
					var selected = false;
				};
				__super__ (Option, '__init__') (self, 'option');
				self.sa ('name', key);
				self.sa ('id', key);
				self.sv (key);
				self.html (displayname);
				if (selected) {
					self.sa ('selected', true);
				}
			});}
		});
		var CheckBox = __class__ ('CheckBox', [Input], {
			__module__: __name__,
			get setchecked () {return __get__ (this, function (self, checked) {
				self.e.checked = checked;
				return self;
			});},
			get getchecked () {return __get__ (this, function (self) {
				return self.e.checked;
			});},
			get __init__ () {return __get__ (this, function (self, checked) {
				if (typeof checked == 'undefined' || (checked != null && checked .hasOwnProperty ("__kwargtrans__"))) {;
					var checked = false;
				};
				__super__ (CheckBox, '__init__') (self, 'checkbox');
				self.setchecked (checked);
			});}
		});
		var TextArea = __class__ ('TextArea', [e], {
			__module__: __name__,
			get __init__ () {return __get__ (this, function (self) {
				__super__ (TextArea, '__init__') (self, 'textarea');
			});},
			get setText () {return __get__ (this, function (self, content) {
				self.sv (content);
				return self;
			});},
			get getText () {return __get__ (this, function (self) {
				return self.v ();
			});}
		});
		var WINDOW_SAFETY_MARGIN = 10;
		var Button = __class__ ('Button', [Input], {
			__module__: __name__,
			get clicked () {return __get__ (this, function (self) {
				self.callback (self.key);
			});},
			get __init__ () {return __get__ (this, function (self, caption, callback, key) {
				if (typeof callback == 'undefined' || (callback != null && callback .hasOwnProperty ("__kwargtrans__"))) {;
					var callback = null;
				};
				if (typeof key == 'undefined' || (key != null && key .hasOwnProperty ("__kwargtrans__"))) {;
					var key = null;
				};
				__super__ (Button, '__init__') (self, 'button');
				self.sv (caption);
				if (!(callback === null)) {
					self.callback = callback;
					self.key = key;
					self.ae ('mousedown', self.clicked);
				}
			});}
		});
		var RawTextInput = __class__ ('RawTextInput', [Input], {
			__module__: __name__,
			get keyup () {return __get__ (this, function (self, ev) {
				if (!(self.callback === null)) {
					if (ev.keyCode == 13) {
						if (!(self.entercallback === null)) {
							self.entercallback (self.v ());
						}
					}
					else if (!(self.keycallback === null)) {
						self.keycallback (ev.keyCode, self.v ());
					}
				}
			});},
			get setText () {return __get__ (this, function (self, content) {
				self.sv (content);
				return self;
			});},
			get getText () {return __get__ (this, function (self) {
				return self.v ();
			});},
			get __init__ () {return __get__ (this, function (self, args) {
				__super__ (RawTextInput, '__init__') (self, 'text');
				self.entercallback = args.py_get ('entercallback', null);
				self.keycallback = args.py_get ('keycallback', null);
				self.cssclass = args.py_get ('tinpclass', 'defaultrawtextinput');
				self.ac (self.cssclass);
				self.ae ('keyup', self.keyup);
			});}
		});
		var TextInputWithButton = __class__ ('TextInputWithButton', [e], {
			__module__: __name__,
			get submitcallback () {return __get__ (this, function (self) {
				if (!(self.onsubmitcallback === null)) {
					var v = self.tinp.v ();
					self.tinp.sv ('');
					self.onsubmitcallback (v);
				}
			});},
			get __init__ () {return __get__ (this, function (self, args) {
				if (typeof args == 'undefined' || (args != null && args .hasOwnProperty ("__kwargtrans__"))) {;
					var args = dict ({});
				};
				__super__ (TextInputWithButton, '__init__') (self, 'div');
				var contclass = args.py_get ('contclass', 'textinputcontainer');
				args ['tinpclass'] = args.py_get ('tinpclass', 'textinputtext');
				var sbtnclass = args.py_get ('sbtnclass', 'textinputbutton');
				self.container = Div ().ac (contclass);
				self.onsubmitcallback = args.py_get ('submitcallback', null);
				args ['entercallback'] = self.submitcallback;
				self.tinp = RawTextInput (args);
				self.sbtn = Button ('Submit', self.submitcallback).ac (sbtnclass);
				self.container.aa (list ([self.tinp, self.sbtn]));
				self.a (self.container);
			});},
			get focus () {return __get__ (this, function (self) {
				self.tinp.fl ();
				return self;
			});}
		});
		var LogItem = __class__ ('LogItem', [e], {
			__module__: __name__,
			get equalto () {return __get__ (this, function (self, logitem) {
				return self.content == logitem.content && self.kind == logitem.kind;
			});},
			get getcontent () {return __get__ (this, function (self) {
				if (self.mul == 0) {
					return self.content;
				}
				else {
					return "<span class='logitemcontentmul'>+{}</span> {}".format (self.mul, self.content);
				}
			});},
			get updatecontent () {return __get__ (this, function (self) {
				self.cdiv.html (self.getcontent ());
				return self;
			});},
			get __init__ () {return __get__ (this, function (self, content, kind) {
				if (typeof kind == 'undefined' || (kind != null && kind .hasOwnProperty ("__kwargtrans__"))) {;
					var kind = 'normal';
				};
				__super__ (LogItem, '__init__') (self, 'div');
				self.kind = kind;
				self.mul = 0;
				self.tdiv = Div ().ac ('logtimediv').html ('{}'.format (new Date ().toLocaleTimeString ()));
				self.content = content;
				self.cdiv = Div ().ac ('logcontentdiv');
				if (len (self.content) > 0) {
					if (self.content [0] == '[' || self.content [0] == '{') {
						try {
							var json = JSON.parse (self.content);
							var jsonstr = JSON.stringify (json, null, 2);
							self.content = ('<pre>' + jsonstr) + '</pre>';
							self.cdiv.ac ('logcontentjson');
						}
						catch (__except0__) {
							// pass;
						}
					}
				}
				self.cdiv.html (self.content);
				if (self.kind == 'cmd') {
					self.cdiv.ac ('logcontentcmd');
				}
				else if (self.kind == 'cmdreadline') {
					self.cdiv.ac ('logcontentcmdreadline');
				}
				else if (self.kind == 'cmdstatusok') {
					self.cdiv.ac ('logcontentcmdstatusok');
				}
				else if (self.kind == 'cmdstatuserr') {
					self.cdiv.ac ('logcontentcmdstatuserr');
				}
				self.idiv = Div ().ac ('logitemdiv').aa (list ([self.tdiv, self.cdiv]));
				self.idiv.aa (list ([self.tdiv, self.cdiv]));
				self.a (self.idiv);
			});}
		});
		var Log = __class__ ('Log', [e], {
			__module__: __name__,
			get __init__ () {return __get__ (this, function (self, args) {
				__super__ (Log, '__init__') (self, 'div');
				self.width = args.py_get ('width', 600);
				self.height = args.py_get ('height', 400);
				self.maxitems = args.py_get ('maxitems', 100);
				self.ac ('logdiv');
				self.py_items = list ([]);
				self.resize (self.width, self.height);
			});},
			get resize () {return __get__ (this, function (self, width, height) {
				self.width = width;
				self.height = height;
				self.w (self.width).mh (self.height);
				return self;
			});},
			get build () {return __get__ (this, function (self) {
				self.x ();
				var __iterable0__ = py_reversed (self.py_items);
				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
					var item = __iterable0__ [__index0__];
					item.updatecontent ();
					self.a (item);
				}
			});},
			get add () {return __get__ (this, function (self, item) {
				if (len (self.py_items) > 0) {
					var last = self.py_items [len (self.py_items) - 1];
					if (last.equalto (item)) {
						last.mul++;
					}
					else {
						self.py_items.append (item);
					}
				}
				else {
					self.py_items.append (item);
				}
				if (len (self.py_items) > self.maxitems) {
					self.py_items = self.py_items.__getslice__ (1, null, 1);
				}
			});},
			get log () {return __get__ (this, function (self, item) {
				self.add (item);
				self.build ();
			});}
		});
		var Tab = __class__ ('Tab', [e], {
			__module__: __name__,
			get __init__ () {return __get__ (this, function (self, key, displayname, element) {
				self.key = key;
				self.displayname = displayname;
				self.element = element;
				self.tabelement = null;
			});}
		});
		var TabPane = __class__ ('TabPane', [e], {
			__module__: __name__,
			get __init__ () {return __get__ (this, function (self, args) {
				__super__ (TabPane, '__init__') (self, 'div');
				self.kind = args.py_get ('kind', 'child');
				self.width = args.py_get ('width', 600);
				self.height = args.py_get ('height', 400);
				self.marginleft = args.py_get ('marginleft', 0);
				self.margintop = args.py_get ('margintop', 0);
				self.tabsheight = args.py_get ('tabsheight', 40);
				self.tabsdiv = Div ().ac ('tabpanetabsdiv');
				self.contentdiv = Div ().ac ('tabpanecontentdiv');
				self.container = Div ().ac ('tabpanecontainer');
				self.container.aa (list ([self.tabsdiv, self.contentdiv]));
				self.a (self.container);
				self.tabs = list ([]);
				self.seltab = null;
				self.resize ();
			});},
			get resize () {return __get__ (this, function (self) {
				if (self.kind == 'main') {
					self.width = window.innerWidth - 2 * WINDOW_SAFETY_MARGIN;
					self.height = window.innerHeight - 2 * WINDOW_SAFETY_MARGIN;
					self.marginleft = WINDOW_SAFETY_MARGIN;
					self.margintop = WINDOW_SAFETY_MARGIN;
				}
				self.contentheight = self.height - self.tabsheight;
				self.tabsdiv.w (self.width).h (self.tabsheight);
				self.contentdiv.w (self.width).h (self.contentheight);
				self.container.w (self.width).h (self.height).ml (self.marginleft).mt (self.margintop);
				try {
					self.resizecontent (self.seltab.element);
				}
				catch (__except0__) {
					// pass;
				}
			});},
			get tabSelectedCallback () {return __get__ (this, function (self, tab) {
				self.selectByKey (tab.key);
				// pass;
			});},
			get setTabs () {return __get__ (this, function (self, tabs, key) {
				self.tabs = tabs;
				self.tabsdiv.x ();
				var __iterable0__ = self.tabs;
				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
					var tab = __iterable0__ [__index0__];
					var tabelement = Div ().aac (list (['tabpanetab', 'noselect'])).html (tab.displayname);
					self.tabsdiv.a (tabelement);
					tab.tabelement = tabelement;
					tab.tabelement.ae ('mousedown', self.tabSelectedCallback.bind (self, tab));
				}
				return self.selectByKey (key);
			});},
			get getTabByKey () {return __get__ (this, function (self, key, updateclass) {
				if (typeof updateclass == 'undefined' || (updateclass != null && updateclass .hasOwnProperty ("__kwargtrans__"))) {;
					var updateclass = false;
				};
				if (len (self.tabs) == 0) {
					return null;
				}
				var seltab = self.tabs [0];
				var __iterable0__ = self.tabs;
				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
					var tab = __iterable0__ [__index0__];
					if (updateclass) {
						tab.tabelement.rc ('tabpaneseltab');
						if (tab.key == key) {
							tab.tabelement.ac ('tabpaneseltab');
						}
					}
					if (tab.key == key) {
						var seltab = tab;
					}
				}
				return seltab;
			});},
			get innercontentheight () {return __get__ (this, function (self) {
				return self.contentheight - SCROLL_BAR_WIDTH;
			});},
			get innercontentwidth () {return __get__ (this, function (self) {
				return self.width - SCROLL_BAR_WIDTH;
			});},
			get resizecontent () {return __get__ (this, function (self, element) {
				try {
					element.resize (self.innercontentwidth (), self.innercontentheight ());
				}
				catch (__except0__) {
					// pass;
				}
			});},
			get setTabElementByKey () {return __get__ (this, function (self, key, tabelement) {
				var tab = self.getTabByKey (key);
				if (tab == null) {
					return self;
				}
				tab.element = tabelement;
				self.resizecontent (tab.element);
				return self;
			});},
			get selectByKey () {return __get__ (this, function (self, key) {
				self.seltab = self.getTabByKey (key, true);
				if (self.seltab == null) {
					return self;
				}
				var element = self.seltab.element;
				self.contentdiv.x ().a (element);
				self.resizecontent (element);
				return self;
			});}
		});
		var ComboOption = __class__ ('ComboOption', [object], {
			__module__: __name__,
			get __init__ () {return __get__ (this, function (self, key, displayname) {
				self.key = key;
				self.displayname = displayname;
			});}
		});
		var ComboBox = __class__ ('ComboBox', [e], {
			__module__: __name__,
			get selectchangecallback () {return __get__ (this, function (self) {
				var key = self.select.v ();
				if (!(self.changecallback === null)) {
					self.changecallback (key);
				}
			});},
			get __init__ () {return __get__ (this, function (self, args) {
				__super__ (ComboBox, '__init__') (self, 'div');
				self.selectclass = args.py_get ('selectclass', 'comboboxselect');
				self.optionfirstclass = args.py_get ('optionfirstclass', 'comboboxoptionfirst');
				self.optionclass = args.py_get ('optionclass', 'comboboxoption');
				self.changecallback = args.py_get ('changecallback', null);
				self.options = list ([]);
				self.container = Div ();
				self.select = Select ().ac (self.selectclass);
				self.select.ae ('change', self.selectchangecallback);
				self.container.a (self.select);
				self.a (self.container);
			});},
			get setoptions () {return __get__ (this, function (self, options, selectedkey) {
				if (typeof selectedkey == 'undefined' || (selectedkey != null && selectedkey .hasOwnProperty ("__kwargtrans__"))) {;
					var selectedkey = null;
				};
				self.options = options;
				self.select.x ();
				var first = true;
				var __iterable0__ = self.options.py_items ();
				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
					var __left0__ = __iterable0__ [__index0__];
					var key = __left0__ [0];
					var displayname = __left0__ [1];
					var opte = Option (key, displayname, key == selectedkey);
					if (first) {
						opte.ac (self.optionfirstclass);
						var first = false;
					}
					else {
						opte.ac (self.optionclass);
					}
					self.select.a (opte);
				}
				return self;
			});}
		});
		var LinkedCheckBox = __class__ ('LinkedCheckBox', [Input], {
			__module__: __name__,
			get setchecked () {return __get__ (this, function (self, checked) {
				self.e.checked = checked;
				return self;
			});},
			get getchecked () {return __get__ (this, function (self) {
				return self.e.checked;
			});},
			get updatevar () {return __get__ (this, function (self) {
				self.parent [self.varname] = self.getchecked ();
			});},
			get changed () {return __get__ (this, function (self) {
				self.updatevar ();
				if (!(self.changecallback === null)) {
					self.changecallback ();
				}
			});},
			get __init__ () {return __get__ (this, function (self, parent, varname, args) {
				if (typeof args == 'undefined' || (args != null && args .hasOwnProperty ("__kwargtrans__"))) {;
					var args = dict ({});
				};
				__super__ (LinkedCheckBox, '__init__') (self, 'checkbox');
				self.parent = parent;
				self.varname = varname;
				self.setchecked (self.parent [self.varname]);
				self.changecallback = args.py_get ('changecallback', null);
				self.ae ('change', self.changed);
			});}
		});
		var LinkedTextInput = __class__ ('LinkedTextInput', [e], {
			__module__: __name__,
			get updatevar () {return __get__ (this, function (self) {
				self.parent [self.varname] = self.getText ();
			});},
			get keyup () {return __get__ (this, function (self) {
				self.updatevar ();
				if (!(self.keyupcallback === null)) {
					self.keyupcallback ();
				}
			});},
			get setText () {return __get__ (this, function (self, content) {
				self.rawtextinput.setText (content);
				return self;
			});},
			get getText () {return __get__ (this, function (self) {
				return self.rawtextinput.getText ();
			});},
			get able () {return __get__ (this, function (self, enabled) {
				self.rawtextinput.able (enabled);
				return self;
			});},
			get __init__ () {return __get__ (this, function (self, parent, varname, args) {
				if (typeof args == 'undefined' || (args != null && args .hasOwnProperty ("__kwargtrans__"))) {;
					var args = dict ({});
				};
				__super__ (LinkedTextInput, '__init__') (self, 'div');
				self.parent = parent;
				self.varname = varname;
				self.rawtextinputclass = args.py_get ('textclass', 'defaultlinkedtextinputtext');
				self.rawtextinput = RawTextInput (dict ({'keycallback': self.keyup, 'tinpclass': self.rawtextinputclass}));
				self.text = args.py_get ('text', '');
				self.setText (self.text);
				patchclasses (self, args);
				self.keyupcallback = args.py_get ('keyupcallback', null);
				self.a (self.rawtextinput);
			});}
		});
		var LinkedTextarea = __class__ ('LinkedTextarea', [e], {
			__module__: __name__,
			get updatevar () {return __get__ (this, function (self) {
				self.parent [self.varname] = self.getText ();
			});},
			get keyup () {return __get__ (this, function (self) {
				self.updatevar ();
			});},
			get setText () {return __get__ (this, function (self, content) {
				self.textarea.setText (content);
			});},
			get getText () {return __get__ (this, function (self) {
				return self.textarea.getText ();
			});},
			get __init__ () {return __get__ (this, function (self, parent, varname, args) {
				if (typeof args == 'undefined' || (args != null && args .hasOwnProperty ("__kwargtrans__"))) {;
					var args = dict ({});
				};
				__super__ (LinkedTextarea, '__init__') (self, 'div');
				self.parent = parent;
				self.varname = varname;
				self.textarea = TextArea ();
				self.textarea.ae ('keyup', self.keyup);
				self.text = args.py_get ('text', '');
				self.setText (self.text);
				patchclasses (self, args);
				self.a (self.textarea);
			});}
		});
		var LabeledLinkedCheckBox = __class__ ('LabeledLinkedCheckBox', [e], {
			__module__: __name__,
			get __init__ () {return __get__ (this, function (self, label, parent, varname, args) {
				if (typeof args == 'undefined' || (args != null && args .hasOwnProperty ("__kwargtrans__"))) {;
					var args = dict ({});
				};
				__super__ (LabeledLinkedCheckBox, '__init__') (self, 'div');
				self.lcb = LinkedCheckBox (parent, varname, args);
				self.container = Div ().ac ('labeledlinkedcheckboxcontainer');
				self.ldiv = Div ().html (label);
				self.container.aa (list ([self.ldiv, self.lcb]));
				patchclasses (self, args);
				self.a (self.container).ac ('labeledlinkedcheckbox');
			});}
		});
		var SplitPane = __class__ ('SplitPane', [e], {
			__module__: __name__,
			get resize () {return __get__ (this, function (self, width, height) {
				self.width = width;
				self.height = height;
				self.controldiv.w (self.width).h (self.controlheight);
				self.contentheight = self.height - self.controlheight;
				if (self.contentheight < self.mincontentheight) {
					self.contentheight = self.mincontentheight;
				}
				self.contentdiv.w (self.width).h (self.contentheight);
				self.w (self.width).h (self.height);
				try {
					self.content.resize (self.innercontentwidth (), self.innercontentheight ());
				}
				catch (__except0__) {
					// pass;
				}
			});},
			get innercontentheight () {return __get__ (this, function (self) {
				return self.contentheight - SCROLL_BAR_WIDTH;
			});},
			get innercontentwidth () {return __get__ (this, function (self) {
				return self.width - SCROLL_BAR_WIDTH;
			});},
			get setcontent () {return __get__ (this, function (self, element) {
				self.content = element;
				self.contentdiv.x ().a (self.content);
			});},
			get __init__ () {return __get__ (this, function (self, args) {
				if (typeof args == 'undefined' || (args != null && args .hasOwnProperty ("__kwargtrans__"))) {;
					var args = dict ({});
				};
				__super__ (SplitPane, '__init__') (self, 'div');
				self.width = args.py_get ('width', 600);
				self.height = args.py_get ('height', 400);
				self.controlheight = args.py_get ('controlheight', 100);
				self.mincontentheight = args.py_get ('mincontentheight', 100);
				self.controldiv = Div ().ac ('splitpanecontrolpanel');
				self.contentdiv = Div ().ac ('splitpanecontentdiv');
				self.resize (self.width, self.height);
				self.aa (list ([self.controldiv, self.contentdiv]));
			});}
		});
		var ProcessConsole = __class__ ('ProcessConsole', [SplitPane], {
			__module__: __name__,
			get aliascallback () {return __get__ (this, function (self, key) {
				var cmds = self.cmdaliases [key] ['cmds'];
				var __iterable0__ = cmds;
				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
					var cmd = __iterable0__ [__index0__];
					self.submitcallback (cmd);
				}
			});},
			get submitcallback () {return __get__ (this, function (self, content) {
				self.log.log (LogItem (content, 'cmd'));
				if (self.cmdinpcallback === null) {
					return ;
				}
				self.cmdinpcallback (content, self.key);
			});},
			get __init__ () {return __get__ (this, function (self, args) {
				if (typeof args == 'undefined' || (args != null && args .hasOwnProperty ("__kwargtrans__"))) {;
					var args = dict ({});
				};
				args ['controlheight'] = 80;
				__super__ (ProcessConsole, '__init__') (self, args);
				self.key = args.py_get ('key', null);
				self.cmdinpcallback = args.py_get ('cmdinpcallback', null);
				self.cmdinp = TextInputWithButton (dict ({'submitcallback': self.submitcallback}));
				self.cmdaliases = args.py_get ('cmdaliases', dict ({}));
				self.controldiv.a (self.cmdinp);
				var __iterable0__ = self.cmdaliases.py_keys ();
				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
					var cmdaliaskey = __iterable0__ [__index0__];
					var cmdalias = self.cmdaliases [cmdaliaskey];
					var btn = Button (cmdalias ['display'], self.aliascallback, cmdaliaskey);
					self.controldiv.a (btn);
				}
				self.log = Log (dict ({}));
				self.setcontent (self.log);
			});}
		});
		var SCHEMA_WRITE_PREFERENCE_DEFAULTS = list ([dict ({'key': 'addchild', 'display': 'Add child', 'default': true}), dict ({'key': 'remove', 'display': 'Remove', 'default': true}), dict ({'key': 'childsopened', 'display': 'Childs opened', 'default': false}), dict ({'key': 'editenabled', 'display': 'Edit enabled', 'default': true}), dict ({'key': 'editkey', 'display': 'Edit key', 'default': true}), dict ({'key': 'editvalue', 'display': 'Edit value', 'default': true}), dict ({'key': 'radio', 'display': 'Radio', 'default': false}), dict ({'key': 'showhelpashtml', 'display': 'Show help as HTML', 'default': true})]);
		var SchemaWritePreference = __class__ ('SchemaWritePreference', [object], {
			__module__: __name__,
			get __init__ () {return __get__ (this, function (self) {
				var __iterable0__ = SCHEMA_WRITE_PREFERENCE_DEFAULTS;
				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
					var item = __iterable0__ [__index0__];
					self [item ['key']] = item ['default'];
				}
				self.parent = null;
				self.changecallback = null;
				self.disabledlist = list ([]);
			});},
			get setparent () {return __get__ (this, function (self, parent) {
				self.parent = parent;
				return self;
			});},
			get setchangecallback () {return __get__ (this, function (self, changecallback) {
				self.changecallback = changecallback;
				return self;
			});},
			get changed () {return __get__ (this, function (self) {
				if (!(self.changecallback === null)) {
					self.changecallback ();
				}
			});},
			get setdisabledlist () {return __get__ (this, function (self, disabledlist) {
				self.disabledlist = disabledlist;
				return self;
			});},
			get form () {return __get__ (this, function (self) {
				var formdiv = Div ().ac ('noselect');
				var mdl = self.disabledlist;
				if (!(self.parent === null)) {
					if (self.parent.parent === null) {
						var mdl = mdl + list (['editkey']);
					}
				}
				var __iterable0__ = SCHEMA_WRITE_PREFERENCE_DEFAULTS;
				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
					var item = __iterable0__ [__index0__];
					if (!(__in__ (item ['key'], mdl))) {
						formdiv.a (LabeledLinkedCheckBox (item ['display'], self, item ['key'], dict ({'patchclasses': list (['container/a/schemawritepreferenceformsubdiv']), 'changecallback': self.changed})));
					}
				}
				return formdiv;
			});},
			get toobj () {return __get__ (this, function (self) {
				var obj = dict ({});
				var __iterable0__ = SCHEMA_WRITE_PREFERENCE_DEFAULTS;
				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
					var item = __iterable0__ [__index0__];
					obj [item ['key']] = self [item ['key']];
				}
				return obj;
			});}
		});
		var DEFAULT_HELP = 'No help available for this item.';
		var DEFAULT_ENABLED = true;
		var SchemaItem = __class__ ('SchemaItem', [e], {
			__module__: __name__,
			get baseobj () {return __get__ (this, function (self) {
				var obj = dict ({'kind': self.kind, 'enabled': self.enabled, 'help': self.help, 'writepreference': self.writepreference.toobj ()});
				return obj;
			});},
			get toobj () {return __get__ (this, function (self) {
				return self.baseobj ();
			});},
			get topureobj () {return __get__ (this, function (self) {
				var pureobj = dict ({});
				return pureobj;
			});},
			get enablecallback () {return __get__ (this, function (self) {
				self.enabled = self.enablecheckbox.getchecked ();
				if (!(self.childparent === null)) {
					if (self.childparent.writepreference.radio) {
						self.childparent.setradio (self);
					}
				}
			});},
			get setenabled () {return __get__ (this, function (self, enabled) {
				self.enabled = enabled;
				self.enablecheckbox.setchecked (self.enabled);
			});},
			get helpboxclicked () {return __get__ (this, function (self) {
				event.stopPropagation ();
				if (self.helpopen) {
					self.helphook.x ();
					self.helpopen = false;
				}
				else {
					self.helpdiv = Div ().ac ('schemahelpdiv');
					self.helpcontentdiv = Div ().aac (list (['schemahelpcontentdiv', 'noselect'])).html (self.help);
					self.helpeditdiv = Div ().ac ('schemahelpeditdiv');
					self.helpedittextarea = LinkedTextarea (self, 'help', dict ({'patchclasses': list (['textarea/a/schemahelpedittextarea']), 'text': self.help}));
					self.helpeditdiv.a (self.helpedittextarea);
					if (self.writepreference.showhelpashtml) {
						self.helpdiv.a (self.helpcontentdiv);
					}
					else {
						self.helpdiv.a (self.helpeditdiv);
					}
					self.helphook.a (self.helpdiv);
					self.helpopen = true;
				}
			});},
			get settingsboxclicked () {return __get__ (this, function (self) {
				if (self.settingsopen) {
					self.settingshook.x ();
					self.settingsopen = false;
				}
				else {
					self.settingsdiv = Div ().ac ('schemasettingsdiv').a (self.writepreference.form ());
					self.settingshook.a (self.settingsdiv);
					self.settingsopen = true;
				}
			});},
			get removeboxclicked () {return __get__ (this, function (self) {
				self.childparent.remove (self);
				// pass;
			});},
			get writepreferencechangedtask () {return __get__ (this, function (self) {
				// pass;
			});},
			get writepreferencechanged () {return __get__ (this, function (self) {
				self.helpboxclicked ();
				self.helpboxclicked ();
				self.enablecheckbox.able (self.writepreference.editenabled);
				self.setchildparent (self.childparent);
				self.writepreferencechangedtask ();
				if (!(self.parent === null)) {
					self.parent.writepreferencechangedtask ();
				}
			});},
			get setchildparent () {return __get__ (this, function (self, childparent) {
				self.childparent = childparent;
				if (!(self.childparent === null) && self.writepreference.remove) {
					self.schemacontainer.x ().aa (list ([self.enablebox, self.element, self.helpbox, self.settingsbox, self.removebox]));
				}
				else {
					self.schemacontainer.x ().aa (list ([self.enablebox, self.element, self.helpbox, self.settingsbox]));
				}
			});},
			get __init__ () {return __get__ (this, function (self, args) {
				__super__ (SchemaItem, '__init__') (self, 'div');
				self.parent = null;
				self.childparent = null;
				self.args = args;
				self.kind = 'item';
				self.enabled = args.py_get ('enabled', DEFAULT_ENABLED);
				self.help = args.py_get ('help', DEFAULT_HELP);
				self.writepreference = args.py_get ('writepreference', SchemaWritePreference ());
				self.writepreference.setparent (self);
				self.writepreference.setchangecallback (self.writepreferencechanged);
				self.element = Div ().ac ('schemaitem');
				self.schemacontainer = Div ().ac ('schemacontainer');
				self.enablebox = Div ().ac ('schemaenablebox');
				self.enablecheckbox = CheckBox (self.enabled).ac ('schemaenablecheckbox').ae ('change', self.enablecallback);
				self.enablecheckbox.able (self.writepreference.editenabled);
				self.enablebox.a (self.enablecheckbox);
				self.helpbox = Div ().aac (list (['schemahelpbox', 'noselect'])).ae ('mousedown', self.helpboxclicked).html ('?');
				self.settingsbox = Div ().aac (list (['schemasettingsbox', 'noselect'])).ae ('mousedown', self.settingsboxclicked).html ('S');
				self.removebox = Div ().aac (list (['schemaremovebox', 'noselect'])).ae ('mousedown', self.removeboxclicked).html ('X');
				self.afterelementhook = Div ();
				self.settingsopen = args.py_get ('settingsopen', false);
				self.helpopen = args.py_get ('helpopen', false);
				self.settingshook = Div ();
				self.helphook = Div ();
				self.schemacontainer.aa (list ([self.enablebox, self.element, self.helpbox, self.settingsbox]));
				self.itemcontainer = Div ();
				self.itemcontainer.aa (list ([self.schemacontainer, self.helphook, self.settingshook, self.afterelementhook]));
				self.a (self.itemcontainer);
			});}
		});
		var NamedSchemaItem = __class__ ('NamedSchemaItem', [e], {
			__module__: __name__,
			get toobj () {return __get__ (this, function (self) {
				return dict ({'kind': 'nameditem', 'key': self.key, 'item': self.item.toobj ()});
			});},
			get writepreferencechangedtask () {return __get__ (this, function (self) {
				self.linkedtextinput.able (self.item.writepreference.editkey);
			});},
			get keychanged () {return __get__ (this, function (self) {
				if (!(self.keychangedcallback === null)) {
					self.keychangedcallback ();
				}
			});},
			get setkeychangedcallback () {return __get__ (this, function (self, keychangedcallback) {
				self.keychangedcallback = keychangedcallback;
				return self;
			});},
			get __init__ () {return __get__ (this, function (self, args) {
				__super__ (NamedSchemaItem, '__init__') (self, 'div');
				self.kind = 'nameditem';
				self.key = args.py_get ('key', uid ());
				self.item = args.py_get ('item', SchemaItem (args));
				self.keychangedcallback = null;
				self.item.parent = self;
				self.namedcontainer = Div ().ac ('namedschemaitem');
				self.namediv = Div ().ac ('schemaitemname');
				self.linkedtextinput = LinkedTextInput (self, 'key', dict ({'textclass': 'namedschemaitemrawtextinput', 'keyupcallback': self.keychanged}));
				self.linkedtextinput.setText (self.key);
				self.linkedtextinput.able (self.item.writepreference.editkey);
				self.namediv.a (self.linkedtextinput);
				self.namedcontainer.aa (list ([self.namediv, self.item]));
				self.a (self.namedcontainer);
			});}
		});
		var SchemaScalar = __class__ ('SchemaScalar', [SchemaItem], {
			__module__: __name__,
			get toobj () {return __get__ (this, function (self) {
				var obj = self.baseobj ();
				obj ['value'] = self.value;
				return obj;
			});},
			get topureobj () {return __get__ (this, function (self) {
				var obj = self.value;
				return obj;
			});},
			get writepreferencechangedtask () {return __get__ (this, function (self) {
				self.linkedtextinput.able (self.writepreference.editvalue);
			});},
			get __init__ () {return __get__ (this, function (self, args) {
				__super__ (SchemaScalar, '__init__') (self, args);
				self.kind = 'scalar';
				self.value = args.py_get ('value', randscalarvalue (2, 8));
				self.element.ac ('schemascalar');
				args ['keycallback'] = self.textchangedcallback;
				self.linkedtextinput = LinkedTextInput (self, 'value', dict ({'textclass': 'schemascalarrawtextinput'}));
				self.linkedtextinput.setText (self.value);
				self.linkedtextinput.able (self.writepreference.editvalue);
				self.element.ae ('mousedown', self.divclicked);
				self.element.aa (list ([self.linkedtextinput]));
				self.writepreference.setdisabledlist (list (['addchild', 'remove', 'childsopened', 'radio']));
			});}
		});
		var SchemaCollection = __class__ ('SchemaCollection', [SchemaItem], {
			__module__: __name__,
			get topureobj () {return __get__ (this, function (self) {
				var pureobj = dict ({});
				if (self.writepreference.radio) {
					if (self.kind == 'dict') {
						var pureobj = list (['', dict ({})]);
						var __iterable0__ = self.childs;
						for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
							var nameditem = __iterable0__ [__index0__];
							var key = nameditem.key;
							var item = nameditem.item;
							if (item.enabled) {
								var pureobj = list ([key, item.topureobj ()]);
								break;
							}
						}
					}
					else if (self.kind == 'list') {
						var __iterable0__ = self.childs;
						for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
							var item = __iterable0__ [__index0__];
							if (item.enabled) {
								var pureobj = item.topureobj ();
								break;
							}
						}
					}
				}
				else if (self.kind == 'dict') {
					var __iterable0__ = self.childs;
					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
						var nameditem = __iterable0__ [__index0__];
						var key = nameditem.key;
						var item = nameditem.item;
						if (item.enabled) {
							pureobj [key] = item.topureobj ();
						}
					}
				}
				else if (self.kind == 'list') {
					var pureobj = list ([]);
					var __iterable0__ = self.childs;
					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
						var item = __iterable0__ [__index0__];
						if (item.enabled) {
							pureobj.append (item.topureobj ());
						}
					}
				}
				return pureobj;
			});},
			get setradio () {return __get__ (this, function (self, item) {
				var __iterable0__ = self.childs;
				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
					var child = __iterable0__ [__index0__];
					var childitem = child;
					if (child.kind == 'nameditem') {
						var childitem = child.item;
					}
					var childeq = childitem == item;
					childitem.enabled = childeq;
					childitem.enablecheckbox.setchecked (childeq);
				}
			});},
			get buildchilds () {return __get__ (this, function (self) {
				self.childshook.x ();
				var __iterable0__ = self.childs;
				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
					var child = __iterable0__ [__index0__];
					self.childshook.a (child);
				}
			});},
			get remove () {return __get__ (this, function (self, item) {
				var newlist = list ([]);
				var __iterable0__ = self.childs;
				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
					var child = __iterable0__ [__index0__];
					var childeq = false;
					if (child.kind == 'nameditem') {
						var childeq = child.item == item;
					}
					else {
						var childeq = child == item;
					}
					if (!(childeq)) {
						newlist.append (child);
					}
				}
				self.childs = newlist;
				self.openchilds ();
				self.openchilds ();
			});},
			get getschemakinds () {return __get__ (this, function (self) {
				var schemakinds = dict ({'create': 'Create new', 'scalar': 'Scalar', 'list': 'List', 'dict': 'Dict'});
				var __iterable0__ = self.childs;
				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
					var nameditem = __iterable0__ [__index0__];
					var key = nameditem.key;
					if (!(key == null)) {
						if (len (key) > 0) {
							schemakinds ['#' + key] = key;
						}
					}
				}
				return schemakinds;
			});},
			get updatecreatecombo () {return __get__ (this, function (self) {
				if (!(self.createcombo === null)) {
					self.createcombo.setoptions (self.getschemakinds ());
				}
			});},
			get getchildbykey () {return __get__ (this, function (self, key) {
				if (!(self.kind == 'dict')) {
					return null;
				}
				var __iterable0__ = self.childs;
				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
					var nameditem = __iterable0__ [__index0__];
					if (nameditem.key == key) {
						return nameditem.item;
					}
				}
				return null;
			});},
			get createcallback () {return __get__ (this, function (self, key) {
				self.updatecreatecombo ();
				var sch = SchemaScalar (dict ({}));
				if (key == 'list') {
					var sch = SchemaList (dict ({}));
				}
				else if (key == 'dict') {
					var sch = SchemaDict (dict ({}));
				}
				if (key [0] == '#') {
					var truekey = key.__getslice__ (1, null, 1);
					var titem = self.getchildbykey (truekey);
					if (titem == null) {
						print ('error, no item with key', truekey);
					}
					else {
						var sch = schemafromobj (titem.toobj ());
					}
				}
				sch.setchildparent (self);
				var appendelement = sch;
				if (self.kind == 'dict') {
					var appendelement = NamedSchemaItem (dict ({'item': sch})).setkeychangedcallback (self.updatecreatecombo);
				}
				self.childs.append (appendelement);
				self.buildchilds ();
				self.updatecreatecombo ();
			});},
			get openchilds () {return __get__ (this, function (self) {
				if (self.opened) {
					self.opened = false;
					self.createhook.x ();
					self.childshook.x ();
					self.openbutton.rc ('schemacollectionopenbuttondone');
				}
				else {
					self.opened = true;
					self.creatediv = Div ().ac ('schemaitem').ac ('schemacreate');
					self.createcombo = ComboBox (dict ({'changecallback': self.createcallback}));
					self.updatecreatecombo ();
					self.creatediv.a (self.createcombo);
					if (self.writepreference.addchild) {
						self.createhook.a (self.creatediv);
					}
					self.openbutton.ac ('schemacollectionopenbuttondone');
					self.buildchilds ();
				}
			});},
			get writepreferencechangedtask () {return __get__ (this, function (self) {
				self.openchilds ();
				self.openchilds ();
			});},
			get __init__ () {return __get__ (this, function (self, args) {
				__super__ (SchemaCollection, '__init__') (self, args);
				self.kind = 'collection';
				self.opened = false;
				self.childs = args.py_get ('childs', list ([]));
				self.editmode = args.py_get ('editmode', false);
				self.childseditable = args.py_get ('childseditable', true);
				self.element.ac ('schemacollection');
				self.openbutton = Div ().ac ('schemacollectionopenbutton').ae ('mousedown', self.openchilds);
				self.element.aa (list ([self.openbutton]));
				self.createcombo = null;
				self.createhook = Div ();
				self.childshook = Div ();
				self.opendiv = Div ().ac ('schemacollectionopendiv');
				self.opendiv.aa (list ([self.createhook, self.childshook]));
				self.afterelementhook.a (self.opendiv);
				if (self.writepreference.childsopened) {
					self.openchilds ();
				}
			});}
		});
		var SchemaList = __class__ ('SchemaList', [SchemaCollection], {
			__module__: __name__,
			get toobj () {return __get__ (this, function (self) {
				var listobj = list ([]);
				var __iterable0__ = self.childs;
				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
					var item = __iterable0__ [__index0__];
					listobj.append (item.toobj ());
				}
				var obj = self.baseobj ();
				obj ['items'] = listobj;
				return obj;
			});},
			get __init__ () {return __get__ (this, function (self, args) {
				__super__ (SchemaList, '__init__') (self, args);
				self.kind = 'list';
				self.element.ac ('schemalist');
				self.writepreference.setdisabledlist (list (['editvalue']));
			});}
		});
		var SchemaDict = __class__ ('SchemaDict', [SchemaCollection], {
			__module__: __name__,
			get toobj () {return __get__ (this, function (self) {
				var dictobj = list ([]);
				var __iterable0__ = self.childs;
				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
					var item = __iterable0__ [__index0__];
					var sch = dict ({'key': item.key, 'item': item.item.toobj ()});
					dictobj.append (sch);
				}
				var obj = self.baseobj ();
				obj ['items'] = dictobj;
				return obj;
			});},
			get __init__ () {return __get__ (this, function (self, args) {
				__super__ (SchemaDict, '__init__') (self, args);
				self.kind = 'dict';
				self.element.ac ('schemadict');
				self.writepreference.setdisabledlist (list (['editvalue']));
			});}
		});
		var schemawritepreferencefromobj = function (obj) {
			var swp = SchemaWritePreference ();
			var __iterable0__ = SCHEMA_WRITE_PREFERENCE_DEFAULTS;
			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
				var item = __iterable0__ [__index0__];
				swp [item ['key']] = getfromobj (obj, item ['key'], item ['default']);
			}
			return swp;
		};
		var schemafromobj = function (obj) {
			var kind = getfromobj (obj, 'kind', 'dict');
			var enabled = getfromobj (obj, 'enabled', DEFAULT_ENABLED);
			var help = getfromobj (obj, 'help', DEFAULT_HELP);
			var writepreference = schemawritepreferencefromobj (getfromobj (obj, 'writepreference', dict ({})));
			var returnobj = dict ({});
			if (kind == 'scalar') {
				var returnobj = SchemaScalar (dict ({'value': obj ['value'], 'writepreference': writepreference}));
			}
			else if (kind == 'list') {
				var py_items = obj ['items'];
				var childs = list ([]);
				var __iterable0__ = py_items;
				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
					var item = __iterable0__ [__index0__];
					var sch = schemafromobj (item);
					childs.append (sch);
				}
				var returnobj = SchemaList (dict ({'childs': childs, 'writepreference': writepreference}));
				var __iterable0__ = returnobj.childs;
				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
					var child = __iterable0__ [__index0__];
					child.setchildparent (returnobj);
				}
			}
			else if (kind == 'dict') {
				var py_items = obj ['items'];
				var childs = list ([]);
				var __iterable0__ = py_items;
				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
					var itemobj = __iterable0__ [__index0__];
					var key = itemobj ['key'];
					var item = itemobj ['item'];
					var sch = schemafromobj (item);
					var namedsch = NamedSchemaItem (dict ({'key': key, 'item': sch, 'writepreference': writepreference}));
					childs.append (namedsch);
				}
				var returnobj = SchemaDict (dict ({'childs': childs, 'writepreference': writepreference}));
				var __iterable0__ = returnobj.childs;
				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
					var child = __iterable0__ [__index0__];
					child.item.setchildparent (returnobj);
					child.setkeychangedcallback (returnobj.updatecreatecombo);
				}
			}
			returnobj.setenabled (enabled);
			returnobj.help = help;
			return returnobj;
		};
		if (window.location.protocol == 'https:') {
			var ws_scheme = 'wss://';
		}
		else {
			var ws_scheme = 'ws://';
		}
		var SUBMIT_URL = ws_scheme + location.host;
		var queryparamsstring = window.location.search;
		var queryparams = dict ({});
		if (len (queryparamsstring) > 1) {
			var queryparamsstring = queryparamsstring.__getslice__ (1, null, 1);
			var mainparts = queryparamsstring.py_split ('&');
			var __iterable0__ = mainparts;
			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
				var mainpart = __iterable0__ [__index0__];
				var parts = mainpart.py_split ('=');
				queryparams [parts [0]] = parts [1];
			}
		}
		var ENGINE_CMD_ALIASES = dict ({'start': dict ({'display': 'R', 'cmds': list (['r'])}), 'stop': dict ({'display': 'S', 'cmds': list (['s'])}), 'restart': dict ({'display': 'SR', 'cmds': list (['s', 'r'])})});
		var BOT_CMD_ALIASES = dict ({'start': dict ({'display': 'R', 'cmds': list (['r'])}), 'stop': dict ({'display': 'S', 'cmds': list (['s'])}), 'restart': dict ({'display': 'SR', 'cmds': list (['s', 'r'])}), 'loadconfig': dict ({'display': 'LC', 'cmds': list (['s', 'r', 'lc', 'sc'])}), 'loadprofile': dict ({'display': 'LP', 'cmds': list (['lp'])})});
		var socket = null;
		var processconsoles = dict ({'engine': null, 'bot': null});
		var maintabpane = null;
		var configschema = SchemaDict (dict ({}));
		var id = null;
		var srcdiv = Div ().ms ().fs (20);
		var schemajson = null;
		var showsrc = function () {
			var srcjsoncontent = JSON.stringify (serializeconfig (), null, 2);
			srcdiv.html (('<pre>' + srcjsoncontent) + '</pre>');
			maintabpane.selectByKey ('src');
		};
		var serializeconfig = function () {
			var obj = dict ({'config': configschema.topureobj (), 'configschema': configschema.toobj ()});
			return obj;
		};
		var deserializeconfig = function (obj) {
			var schemaobj = dict ({});
			if (__in__ ('configschema', obj)) {
				var schemaobj = obj ['configschema'];
			}
			configschema = schemafromobj (schemaobj);
		};
		var buildconfigdiv = function () {
			var configsplitpane = SplitPane (dict ({'controlheight': 50}));
			configsplitpane.controldiv.aa (list ([Button ('Serialize', serializecallback).fs (24), Button ('Reload', reloadcallback).fs (16), Button ('Show source', showsrc).fs (16)])).bc ('#ddd');
			configsplitpane.setcontent (configschema);
			return configsplitpane;
		};
		var getbincallback = function (content) {
			var obj = JSON.parse (content);
			deserializeconfig (obj);
			maintabpane.setTabElementByKey ('config', buildconfigdiv ());
		};
		var getbinerrcallback = function (err) {
			print ('get bin failed with', err);
			loadlocal ();
		};
		var loadlocal = function () {
			document.location.href = '/?id=local';
		};
		var log = function (content, dest) {
			if (typeof dest == 'undefined' || (dest != null && dest .hasOwnProperty ("__kwargtrans__"))) {;
				var dest = 'engine';
			};
			var li = LogItem (('<pre>' + content) + '</pre>');
			processconsoles [dest].log.log (li);
		};
		var cmdinpcallback = function (cmd, key) {
			socket.emit ('sioreq', dict ({'kind': 'cmd', 'key': key, 'data': cmd}));
		};
		var serializeputjsonbincallback = function (json, content) {
			try {
				var obj = JSON.parse (content);
				var binid = null;
				if (__in__ ('id', obj)) {
					var binid = obj ['id'];
				}
				if (__in__ ('parentId', obj)) {
					var binid = obj ['parentId'];
				}
				if (binid === null) {
					var binid = 'local';
				}
				else {
					socket.emit ('sioreq', dict ({'kind': 'storebinid', 'data': binid}));
				}
				var href = (((window.location.protocol + '//') + window.location.host) + '/?id=') + binid;
				document.location.href = href;
			}
			catch (__except0__) {
				print ('there was an error parsing json', content);
				return ;
			}
		};
		var serializecallback = function () {
			var json = JSON.stringify (serializeconfig (), null, 2);
			putjsonbin (json, serializeputjsonbincallback, id);
		};
		var reloadcallback = function () {
			document.location.href = '/';
		};
		var build = function () {
			processconsoles ['engine'] = ProcessConsole (dict ({'key': 'engine', 'cmdinpcallback': cmdinpcallback, 'cmdaliases': ENGINE_CMD_ALIASES}));
			processconsoles ['bot'] = ProcessConsole (dict ({'key': 'bot', 'cmdinpcallback': cmdinpcallback, 'cmdaliases': BOT_CMD_ALIASES}));
			maintabpane = TabPane (dict ({'kind': 'main'}));
			maintabpane.setTabs (list ([Tab ('engineconsole', 'Engine console', processconsoles ['engine']), Tab ('botconsole', 'Bot console', processconsoles ['bot']), Tab ('config', 'Config', buildconfigdiv ()), Tab ('src', 'Src', srcdiv), Tab ('about', 'About', Div ().ac ('appabout').html ('Flask hello world app.'))]), 'botconsole');
			ge ('maintabdiv').innerHTML = '';
			ge ('maintabdiv').appendChild (maintabpane.e);
		};
		var onconnect = function () {
			log ('socket connected ok');
			socket.emit ('sioreq', dict ({'data': 'socket connected'}));
		};
		var onevent = function (json) {
			var dest = 'engine';
			var logitem = null;
			if (__in__ ('kind', json)) {
				var kind = json ['kind'];
				if (kind == 'procreadline') {
					var dest = json ['prockey'];
					var sline = json ['sline'];
					var logitem = LogItem (sline, 'cmdreadline');
					if (dest == 'bot') {
						if (len (sline) > 0) {
							if (sline [0] == '!') {
								var logitem = LogItem ('bot error:' + sline.__getslice__ (1, null, 1), 'cmdstatuserr');
							}
						}
					}
				}
			}
			if (__in__ ('response', json)) {
				var response = json ['response'];
				if (__in__ ('key', response)) {
					var dest = response ['key'];
				}
				if (__in__ ('status', response)) {
					var status = response ['status'];
					var logitem = LogItem (status, 'cmdstatusok');
					if (len (status) > 0) {
						if (status [0] == '!') {
							var logitem = LogItem (status, 'cmdstatuserr');
						}
					}
				}
			}
			if (logitem === null) {
				log ('socket received event ' + JSON.stringify (json, null, 2), dest);
			}
			else {
				processconsoles [dest].log.log (logitem);
			}
		};
		var windowresizehandler = function () {
			maintabpane.resize ();
		};
		var startup = function () {
			log (('creating socket for submit url [ ' + SUBMIT_URL) + ' ]');
			socket = io.connect (SUBMIT_URL);
			log ('socket created ok');
			socket.on ('connect', onconnect);
			socket.on ('siores', (function __lambda__ (json) {
				return onevent (json);
			}));
			addEventListener (window, 'resize', windowresizehandler);
		};
		build ();
		if (__in__ ('id', queryparams)) {
			var id = queryparams ['id'];
			getjsonbin (id, getbincallback, getbinerrcallback);
		}
		else {
			loadlocal ();
		}
		startup ();
		__pragma__ ('<all>')
			__all__.BOT_CMD_ALIASES = BOT_CMD_ALIASES;
			__all__.Button = Button;
			__all__.CheckBox = CheckBox;
			__all__.ComboBox = ComboBox;
			__all__.ComboOption = ComboOption;
			__all__.DEFAULT_ENABLED = DEFAULT_ENABLED;
			__all__.DEFAULT_HELP = DEFAULT_HELP;
			__all__.Div = Div;
			__all__.ENGINE_CMD_ALIASES = ENGINE_CMD_ALIASES;
			__all__.Input = Input;
			__all__.LabeledLinkedCheckBox = LabeledLinkedCheckBox;
			__all__.LinkedCheckBox = LinkedCheckBox;
			__all__.LinkedTextInput = LinkedTextInput;
			__all__.LinkedTextarea = LinkedTextarea;
			__all__.Log = Log;
			__all__.LogItem = LogItem;
			__all__.NamedSchemaItem = NamedSchemaItem;
			__all__.Option = Option;
			__all__.ProcessConsole = ProcessConsole;
			__all__.RawTextInput = RawTextInput;
			__all__.SCHEMA_WRITE_PREFERENCE_DEFAULTS = SCHEMA_WRITE_PREFERENCE_DEFAULTS;
			__all__.SCROLL_BAR_WIDTH = SCROLL_BAR_WIDTH;
			__all__.SUBMIT_URL = SUBMIT_URL;
			__all__.SchemaCollection = SchemaCollection;
			__all__.SchemaDict = SchemaDict;
			__all__.SchemaItem = SchemaItem;
			__all__.SchemaList = SchemaList;
			__all__.SchemaScalar = SchemaScalar;
			__all__.SchemaWritePreference = SchemaWritePreference;
			__all__.Select = Select;
			__all__.Span = Span;
			__all__.SplitPane = SplitPane;
			__all__.Tab = Tab;
			__all__.TabPane = TabPane;
			__all__.TextArea = TextArea;
			__all__.TextInputWithButton = TextInputWithButton;
			__all__.WINDOW_SAFETY_MARGIN = WINDOW_SAFETY_MARGIN;
			__all__.__name__ = __name__;
			__all__.addEventListener = addEventListener;
			__all__.build = build;
			__all__.buildconfigdiv = buildconfigdiv;
			__all__.ce = ce;
			__all__.cmdinpcallback = cmdinpcallback;
			__all__.configschema = configschema;
			__all__.deserializeconfig = deserializeconfig;
			__all__.e = e;
			__all__.ge = ge;
			__all__.getScrollBarWidth = getScrollBarWidth;
			__all__.getbincallback = getbincallback;
			__all__.getbinerrcallback = getbinerrcallback;
			__all__.getfromobj = getfromobj;
			__all__.getjsonbin = getjsonbin;
			__all__.getjsonbinfailed = getjsonbinfailed;
			__all__.getlocalcontent = getlocalcontent;
			__all__.id = id;
			__all__.loadlocal = loadlocal;
			__all__.log = log;
			__all__.mainpart = mainpart;
			__all__.mainparts = mainparts;
			__all__.maintabpane = maintabpane;
			__all__.onconnect = onconnect;
			__all__.onevent = onevent;
			__all__.parts = parts;
			__all__.patchclasses = patchclasses;
			__all__.processconsoles = processconsoles;
			__all__.putjsonbin = putjsonbin;
			__all__.putjsonbinfailed = putjsonbinfailed;
			__all__.queryparams = queryparams;
			__all__.queryparamsstring = queryparamsstring;
			__all__.randint = randint;
			__all__.randscalarvalue = randscalarvalue;
			__all__.reloadcallback = reloadcallback;
			__all__.schemafromobj = schemafromobj;
			__all__.schemajson = schemajson;
			__all__.schemawritepreferencefromobj = schemawritepreferencefromobj;
			__all__.serializecallback = serializecallback;
			__all__.serializeconfig = serializeconfig;
			__all__.serializeputjsonbincallback = serializeputjsonbincallback;
			__all__.showsrc = showsrc;
			__all__.socket = socket;
			__all__.srcdiv = srcdiv;
			__all__.startup = startup;
			__all__.uid = uid;
			__all__.windowresizehandler = windowresizehandler;
			__all__.ws_scheme = ws_scheme;
		__pragma__ ('</all>')
	}) ();
    return __all__;
}
window ['app'] = app ();
